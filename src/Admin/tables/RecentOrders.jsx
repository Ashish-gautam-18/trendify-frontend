import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { 
  Avatar, 
  Box, 
  Card, 
  CardHeader, 
  Chip, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography 
} from '@mui/material';
import { getOrders } from '../../Redux/Admin/Orders/Action';

const RecentOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Redux store se admin orders ki live state extraction
  const { adminsOrder } = useSelector((store) => store);

  // Component load hote hi orders mangwana
  useEffect(() => {
    if (jwt) {
      dispatch(getOrders({ jwt }));
    }
  }, [jwt, dispatch]);

  // 🛡️ SAFE CHECK LURKING HERE: 
  // Agar adminsOrder directly array hai, ya adminsOrder.orders array hai, use filter karo. 
  // Agar dono me se kuch bhi array nahi hai, toh ek khali [] array le lo taaki page crash na ho!
  const ordersList = Array.isArray(adminsOrder?.orders) 
    ? adminsOrder.orders 
    : Array.isArray(adminsOrder) 
      ? adminsOrder 
      : [];

  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
       <CardHeader
          title='Recent Orders'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={
            <Typography 
              onClick={() => navigate("/admin/orders")} 
              variant='caption' 
              sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem", fontWeight: "bold" }}
            >
              View All
            </Typography>
          }
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important', fontWeight: 600 }
          }}
        />
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='recent customer orders dashboard table'>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Order Id</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 🛠️ BUG FIXED: ordersList ka upyog kiya jo ab crash-proof hai */}
          {ordersList.slice(0, 5).map((item, index) => (
            <TableRow hover key={item.id || item._id || index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
              
              {/* Order Image */}
              <TableCell> 
                <Avatar 
                  alt={item.orderItems?.[0]?.product?.title || "Product"} 
                  src={item.orderItems?.[0]?.product?.imageUrl} 
                /> 
              </TableCell>
             
              {/* Product Titles & Brands with Truncation Support */}
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important`, maxWidth: '280px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    sx={{ 
                      fontWeight: 500, 
                      fontSize: '0.875rem !important',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.orderItems?.map((order) => order.product?.title).join(", ") || "N/A"}
                  </Typography>
                  <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                    {item.orderItems?.[0]?.product?.brand || "N/A"}
                  </Typography>
                </Box>
              </TableCell>
              
              {/* Prices, IDs & Status */}
              <TableCell>₹{item.totalPrice}</TableCell>
              <TableCell>{item.id || item._id}</TableCell>
              <TableCell>
                <Chip 
                  sx={{ color: "white !important", fontWeight: "bold" }} 
                  label={item.orderStatus || "PLACED"} 
                  size='small' 
                  color={
                    item.orderStatus === "PENDING" ? "info" : 
                    item.orderStatus === "DELIVERED" ? "success" : "secondary"
                  } 
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  );
};

export default RecentOrders;

