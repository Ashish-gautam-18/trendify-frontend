import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Alert, AlertTitle, Box, Grid, CircularProgress } from "@mui/material";
import { updatePayment } from "../../../Redux/Customers/Payment/Action";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import OrderTraker from "../orders/OrderTraker";
import AddressCard from "../adreess/AdreessCard";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");

  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");

  // Selective store subscription for optimized component performance
  const currentOrder = useSelector((store) => store.order?.order);

  // Consolidated URL parsing and action dispatch pipeline in a single effect hook
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const idFromUrl = urlParams.get("order_id");
    const payIdFromUrl = urlParams.get("razorpay_payment_id");

    if (idFromUrl) setOrderId(idFromUrl);
    if (payIdFromUrl) setPaymentId(payIdFromUrl);

    if (idFromUrl && payIdFromUrl && jwt) {
      dispatch(updatePayment({ orderId: idFromUrl, paymentId: payIdFromUrl, jwt }));
      dispatch(getOrderById(idFromUrl));
    }
  }, [location.search, dispatch, jwt]);

  // Dynamic state helper mapping for Tracker progress metrics
  const getActiveTrackerStep = (status) => {
    switch (status) {
      case "PENDING": return 0;
      case "PLACED": return 1;
      case "CONFIRMED": return 2;
      case "SHIPPED": return 3;
      case "DELIVERED": return 5;
      default: return 1;
    }
  };

  // Safe fallback UI layout window if the order request is pending
  if (!currentOrder) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] space-y-4">
        <CircularProgress color="secondary" />
        <p className="font-semibold text-gray-500 animate-pulse text-sm">
          Securing payment receipt and configuring order details...
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-36 min-h-screen py-10 bg-gray-50">
      {/* Alert Header Notification */}
      <div className="flex flex-col justify-center items-center">
        <Alert variant="filled" severity="success" sx={{ mb: 6, width: "fit-content", borderRadius: '8px' }}>
          <AlertTitle className="font-bold">Payment Success</AlertTitle>
          Congratulations! Your Order Has Been Placed Successfully.
        </Alert>
      </div>

      {/* Tracker Timeline Container */}
      <Box className="bg-white p-5 shadow-sm rounded-md border mb-6">
        <OrderTraker activeStep={getActiveTrackerStep(currentOrder?.orderStatus)} />
      </Box>

      {/* Render list of purchased products */}
      <Grid container className="space-y-4">
        {currentOrder?.orderItems?.map((item) => {
          const itemKey = item?.id || item?._id;
          return (
            <Grid
              key={itemKey}
              container
              item
              className="shadow-sm rounded-md p-5 border bg-white hover:shadow-md transition-shadow"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              {/* Product Info Description */}
              <Grid item xs={12} md={7}>
                <div className="flex items-center">
                  <img
                    className="w-20 h-20 object-cover object-top rounded border"
                    src={item?.product?.imageUrl || "https://placeholder.com"}
                    alt={item?.product?.title || "Item"}
                  />
                  <div className="ml-5 space-y-1">
                    <p className="font-medium text-gray-800">{item?.product?.title}</p>
                    <p className="text-gray-400 text-xs font-semibold">
                      <span>Size: {item?.size || "Standard"}</span>
                    </p>
                    <p className="text-xs text-gray-500">Seller: {item?.product?.brand}</p>
                    <p className="font-bold mt-1 text-indigo-600">₹{item?.price}</p>
                  </div>
                </div>
              </Grid>

              {/* Delivery Destination Segment */}
              <Grid item xs={12} md={5} className="mt-4 md:mt-0 flex md:justify-end">
                <Box className="md:border-l md:pl-5 border-gray-200 w-full md:w-auto">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Shipping Address</p>
                  {currentOrder?.shippingAddress && (
                    <AddressCard address={currentOrder?.shippingAddress} />
                  )}
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
