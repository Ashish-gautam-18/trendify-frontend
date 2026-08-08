import React from "react";
import { Box, Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();

  // Safe variables extracted with fallbacks
  const productId = item?.product?.id || item?.product?._id;
  const orderId = order?.id || order?._id;
  const isDelivered = order?.orderStatus === "DELIVERED";

  // Formatted date fallbacks if deliveryDate is present in backend
  const displayDate = order?.deliveryDate 
    ? new Date(order.deliveryDate).toLocaleDateString("en-IN", { day: '2-digit', month: 'short' })
    : "Soon";

  return (
    <Box className="p-5 shadow-md hover:shadow-xl border rounded-md bg-white transition-shadow duration-200">
      <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Product Details Section */}
        <Grid item xs={12} sm={6}>
          <div
            onClick={() => orderId && navigate(`/account/order/${orderId}`)}
            className="flex cursor-pointer group"
          >
            <img
              className="w-20 h-20 object-cover object-top rounded border"
              src={item?.product?.imageUrl || "https://placeholder.com"}
              alt={item?.product?.title || "Product Image"}
            />
            <div className="ml-5">
              <p className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                {item?.product?.title}
              </p>
              <p className="text-xs font-semibold text-gray-400 mt-1">
                <span>Size: {item?.size || "N/A"}</span>
              </p>
            </div>
          </div>
        </Grid>

        {/* Price Section */}
        <Grid item xs={4} sm={2}>
          <p className="font-semibold text-gray-700">₹{item?.price}</p>
        </Grid>

        {/* Status & Action Section */}
        <Grid item xs={8} sm={4}>
          <div className="space-y-1">
            <div className="flex items-center font-semibold text-sm">
              {isDelivered ? (
                <>
                  <FiberManualRecordIcon
                    sx={{ width: "14px", height: "14px" }}
                    className="text-green-600 mr-2"
                  />
                  <span className="text-gray-800">Delivered On {displayDate}</span>
                </>
              ) : (
                <>
                  <AdjustIcon
                    sx={{ width: "14px", height: "14px" }}
                    className="text-amber-500 mr-2"
                  />
                  <span className="text-gray-700">Expected Delivery: {displayDate}</span>
                </>
              )}
            </div>
            
            <p className="text-xs text-gray-400">
              {isDelivered ? "Your item has been successfully delivered" : "Your item is in transit"}
            </p>

            {/* Fixed dynamic rate route and status check */}
            {isDelivered && productId && (
              <div
                onClick={() => navigate(`/account/rate/${productId}`)}
                className="flex items-center text-xs font-medium text-indigo-600 cursor-pointer mt-3 hover:underline"
              >
                <StarIcon sx={{ fontSize: "1.2rem" }} className="mr-1 text-amber-500" />
                <span>Rate & Review Product</span>
              </div>
            )}
          </div>
        </Grid>

      </Grid>
    </Box>
  );
};

export default OrderCard;
