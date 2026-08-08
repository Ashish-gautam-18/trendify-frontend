import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { 
  Avatar, 
  Box, 
  Card, 
  CardHeader, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography 
} from '@mui/material';
// 🛠️ PATH FIXED: Relative path ko teen bar se badalkar do bar (../../) kar diya hai
import { findProducts } from '../../Redux/Customers/Product/Action';

const RecentlyAddeddProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Redux store se product live state nikalna
  const customersProduct = useSelector((store) => store.customersProduct);

  // Component load hote hi database se bilkul taaza (latest uploaded) products mangwana
  useEffect(() => {
    const data = {
      category: "", 
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "", // 🛠️ FIXED: "price_low" hata kar khali chhoda taaki backend default "Newest Created" sequence me data bheje
      pageNumber: 0,
      pageSize: 5, 
    };
    dispatch(findProducts(data));
  }, [dispatch]);

  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
       <CardHeader
          title='Recently Added Products'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={
            <Typography 
              onClick={() => navigate("/admin/products")} 
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
      <Table sx={{ minWidth: 800 }} aria-label='recently added products dynamic table'>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Database array (.content) par loop aur safe slice condition */}
          {customersProduct?.products?.content?.slice(0, 5).map((item, index) => (
            <TableRow hover key={item.id || item._id || index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
              {/* Product Image */}
              <TableCell> 
                <Avatar alt={item.title || "Product"} src={item.imageUrl} variant="rounded" sx={{ width: 40, height: 40 }} /> 
              </TableCell>
             
              {/* Product Title and Brand */}
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                    {item.brand}
                  </Typography>
                </Box>
              </TableCell>
              
              {/* Dynamic Category Name */}
              <TableCell>
                {item.category?.name || "N/A"}
              </TableCell>
              
              {/* Dynamic Prices & Quantities */}
              <TableCell>₹{item.discountedPrice}</TableCell>
              <TableCell>{item.quantity ?? 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  );
};

export default RecentlyAddeddProducts;
