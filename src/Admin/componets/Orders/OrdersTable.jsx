import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../../Redux/Admin/Orders/Action";

const OrdersTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  
  // Redux store se admin orders ki state nikalna
  const { adminsOrder } = useSelector((store) => store);
  
  // MUI Menu control karne ke liye array state
  const [anchorElArray, setAnchorElArray] = useState([]);

  // Jab bhi koi order ka status badlega ya load hoga, table refresh hogi
  useEffect(() => {
    if (jwt) {
      dispatch(getOrders({ jwt }));
    }
  }, [jwt, adminsOrder.confirmed, adminsOrder.shipped, adminsOrder.delivered, dispatch]);

  // Menu Open Handler
  const handleUpdateStatusMenuClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  // Menu Close Handler
  const handleUpdateStatusMenuClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  // Order Confirmed Action
  const handleConfirmedOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(confirmOrder(orderId));
  };

  // Order Shipped Action
  const handleShippedOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(shipOrder(orderId));
  };

  // 🛠️ BUG FIXED: Index pass kiya taaki delivered hone par menu close ho jaye
  const handleDeliveredOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(deliveredOrder(orderId));
  };

  // 🛠️ BUG FIXED: Index pass karke ya direct safe tarike se close handle karna
  const handleDeleteOrder = (orderId, index) => {
    if (index !== undefined) handleUpdateStatusMenuClose(index);
    dispatch(deleteOrder(orderId));
  };

  return (
    <Box width="100%">
      <Card className="mt-2">
        <CardHeader
          title="All Orders"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="orders dashboard table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Order Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminsOrder?.orders?.map((item, index) => (
                <TableRow hover key={item.id || item._id}>
                  {/* Products Images Avatars */}
                  <TableCell>
                    <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
                      {item.orderItems?.map((orderItem) => (
                        <Avatar
                          key={orderItem.id || orderItem.product?.id}
                          alt={orderItem.product?.title || "Product"}
                          src={orderItem.product?.imageUrl}
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  {/* Products Titles & Brands */}
                  <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                        {item.orderItems?.map((order, idx) => (
                          <span key={idx}> {order.product?.title || "N/A"},</span>
                        ))}
                      </Typography>
                      <Typography variant="caption">
                        {item.orderItems?.map((order, idx) => (
                          <span key={idx} className="opacity-60"> {order.product?.brand || "N/A"},</span>
                        ))}
                      </Typography>
                    </Box>
                  </TableCell>

                  {/* Total Price & ID */}
                  <TableCell>₹{item.totalPrice}</TableCell>
                  <TableCell>{item.id || item._id}</TableCell>

                  {/* Dynamic Status Chip */}
                  <TableCell sx={{ textAlign: "center" }}>
                    <Chip
                      sx={{ color: "white !important", fontWeight: "bold" }}
                      label={item.orderStatus}
                      size="small"
                      color={
                        item.orderStatus === "PENDING"
                          ? "info"
                          : item.orderStatus === "DELIVERED"
                          ? "success"
                          : "secondary"
                      }
                    />
                  </TableCell>

                  {/* Status Dropdown Menu */}
                  <TableCell sx={{ textAlign: "center" }}>
                    <div>
                      <Button
                        id={`basic-button-${item.id}`}
                        aria-controls={`basic-menu-${item.id}`}
                        aria-haspopup="true"
                        aria-expanded={Boolean(anchorElArray[index])}
                        onClick={(event) => handleUpdateStatusMenuClick(event, index)}
                      >
                        Status
                      </Button>
                      <Menu
                        id={`basic-menu-${item.id}`}
                        anchorEl={anchorElArray[index]}
                        open={Boolean(anchorElArray[index])}
                        onClose={() => handleUpdateStatusMenuClose(index)}
                      >
                        {/* 🛠️ FIXED: Spelling and conditional checks */}
                        <MenuItem
                          onClick={() => handleConfirmedOrder(item.id, index)}
                          disabled={["DELIVERED", "SHIPPED", "CONFIRMED"].includes(item.orderStatus)}
                        >
                          CONFIRMED ORDER
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleShippedOrder(item.id, index)}
                          disabled={["DELIVERED", "SHIPPED"].includes(item.orderStatus)}
                        >
                          SHIPPED ORDER
                        </MenuItem>
                        <MenuItem 
                          onClick={() => handleDeliveredOrder(item.id, index)}
                          disabled={item.orderStatus === "DELIVERED"}
                        >
                          DELIVERED ORDER
                        </MenuItem>
                      </Menu>
                    </div>
                  </TableCell>

                  {/* Delete Option */}
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      onClick={() => handleDeleteOrder(item.id, index)}
                      variant="text"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default OrdersTable;
