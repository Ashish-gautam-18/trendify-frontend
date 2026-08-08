import React, { useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import OrderTraker from "./OrderTraker";
import AddressCard from "../adreess/AdreessCard"; // Maintained current import paths safely

const OrderDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  
  // Safe extraction of nested order state object
  const { order } = useSelector((store) => store);
  const currentOrder = order?.order;

  // Added orderId and dispatch to prevent hook skipping triggers
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId, dispatch]);

  // Safe tracking numerical configuration matching backend values
  const getActiveStep = (status) => {
    switch (status) {
      case "PLACED": return 1;
      case "CONFIRMED": return 2;
      case "SHIPPED": return 3;
      case "DELIVERED": return 5;
      default: return 1;
    }
  };

  if (!currentOrder) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-500 font-medium">
        Loading order details...
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-36 space-y-7 my-10">
      {/* Delivery Address Card wrapper */}
      <Grid container className="p-5 shadow-md border rounded-md bg-white">
        <Grid item xs={12}>
          <h1 className="font-bold text-lg pb-3 border-b text-gray-800">Delivery Address</h1>
        </Grid>
        <Grid item xs={12} sm={6} className="mt-4">
          <AddressCard address={currentOrder?.shippingAddress} />
        </Grid>
      </Grid>

      {/* Dynamic Tracker Status Dashboard Block */}
      <Box className="p-5 shadow-md border rounded-md bg-white">
        <Grid container spacing={3} sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Grid item xs={12} md={9}>
            <OrderTraker activeStep={getActiveStep(currentOrder?.orderStatus)} />
          </Grid>
          <Grid item xs={12} md={3} className="text-right md:text-right text-left">
            {currentOrder?.orderStatus === "DELIVERED" ? (
              <Button color="error" variant="text" size="medium" className="font-semibold">
                RETURN
              </Button>
            ) : (
              <Button sx={{ color: deepPurple[500] }} variant="text" size="medium" className="font-semibold">
                CANCEL ORDER
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Loop rendering mapped items within the targeted specific order */}
      <Grid container className="space-y-4">
        {currentOrder?.orderItems?.map((item) => {
          const itemProductId = item?.product?.id || item?.product?._id;
          return (
            <Grid
              container
              item
              key={item?._id || item?.id}
              className="shadow-sm rounded-md p-5 border bg-white hover:shadow-md transition-shadow"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={12} sm={8}>
                <div className="flex items-center">
                  <img
                    className="w-20 h-20 object-cover object-top rounded border"
                    src={item?.product?.imageUrl || "https://placeholder.com"}
                    alt={item?.product?.title || "Product"}
                  />
                  <div className="ml-5 space-y-1">
                    <p className="font-medium text-gray-800">{item?.product?.title}</p>
                    <p className="text-xs font-semibold text-gray-400 space-x-4">
                      <span>Color: {item?.product?.color || "N/A"}</span>
                      <span>Size: {item?.size || "N/A"}</span>
                    </p>
                    <p className="text-xs text-gray-500">Seller: {item?.product?.brand}</p>
                    <p className="font-bold text-gray-700 mt-1">₹{item?.price}</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={4} className="flex justify-start sm:justify-end mt-4 sm:mt-0">
                {itemProductId && (
                  <Box
                    sx={{ color: deepPurple[500] }}
                    onClick={() => navigate(`/account/rate/${itemProductId}`)}
                    className="flex items-center cursor-pointer group hover:underline text-sm font-medium"
                  >
                    <StarIcon sx={{ fontSize: "1.5rem" }} className="mr-1 text-amber-500" />
                    <span>Rate & Review Product</span>
                  </Box>
                )}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OrderDetails;
