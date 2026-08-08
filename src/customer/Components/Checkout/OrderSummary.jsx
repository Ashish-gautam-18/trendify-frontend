import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material UI core entry layout elements
import { Button } from "@mui/material";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import { createPayment } from "../../../Redux/Customers/Payment/Action";

// Sub-components module links mapping dynamic states (Verify path mapping naming styles)
import CartItem from "../Cart/CartItem";
import AddressCard from "../adreess/AdreessCard";


const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Subscribing directly to the global order lookup partition data model logs
  const order = useSelector((state) => state.order);

  // Auto-fetch data values records immediately as soon as tracking id parameters validate
  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId, dispatch]);

  // Dispatch payment parameters structure forward directly into active payment engines
  const handleCreatePayment = () => {
    const data = { orderId: order?.order?.id, jwt };
    dispatch(createPayment(data));
  };

  return (
    <div className="space-y-5">
      {/* Dynamic shipment target information card block layout */}
      <div className="p-5 shadow-lg rounded-md border bg-white">
        <AddressCard address={order?.order?.shippingAddress} />
      </div>
      
      {/* Primary orders breakdown calculation grids matrix */}
      <div className="lg:grid grid-cols-3 relative justify-between">
        
        {/* Core items rows array looping viewport block */}
        <div className="lg:col-span-2">
          <div className="space-y-3">
            {order?.order?.orderItems?.map((item) => (
              <React.Fragment key={item.id || item.product?.id}>
                <CartItem item={item} showButton={false} />
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Financial checkout summary breakdown panel bar */}
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price ({order?.order?.totalItem || 0} items)</span>
                <span>₹{order?.order?.totalPrice || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹{order?.order?.discount || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹{order?.order?.totalDiscountedPrice || 0}</span>
              </div>
            </div>

            <Button
              onClick={handleCreatePayment}
              variant="contained"
              type="button"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
