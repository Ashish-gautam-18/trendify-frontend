import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../Redux/Customers/Order/Action";
import OrderCard from "./OrderCard";

// Fixed typos in array fields (delevered -> delivered, vlue -> value)
const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getOrderHistory({ jwt }));
    }
  }, [jwt, dispatch]);

  return (
    <Box className="px-5 lg:px-10 my-10">
      <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
        {/* Left Filter Section */}
        <Grid item xs={12} md={3}>
          <div className="h-auto shadow-md bg-white border rounded-md p-5 md:sticky md:top-5">
            <h1 className="font-bold text-lg border-b pb-2">Filters</h1>
            <div className="space-y-4 mt-6">
              <h2 className="font-semibold text-gray-700 text-sm tracking-wide">ORDER STATUS</h2>
              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center cursor-pointer">
                  <input
                    id={`filter-${option.value}`}
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <label
                    htmlFor={`filter-${option.value}`}
                    className="ml-3 text-sm text-gray-600 cursor-pointer select-none"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Right Orders List Section */}
        <Grid item xs={12} md={9}>
          <Box className="space-y-4">
            {order?.orders?.length > 0 ? (
              order.orders.flatMap((singleOrder) =>
                singleOrder?.orderItems?.map((item) => (
                  <OrderCard 
                    key={`${singleOrder.id || singleOrder._id}-${item.id || item._id}`} 
                    item={item} 
                    order={singleOrder} 
                  />
                ))
              )
            ) : (
              <div className="text-center py-10 bg-white border rounded-md shadow-sm text-gray-500">
                No orders found.
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;
