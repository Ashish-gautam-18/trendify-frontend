import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material UI core structural button layouts
import { Button } from "@mui/material";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  // Read current active state records directly from the global customer cart store
  const cart = useSelector((state) => state.cart);

  // Synchronize dynamic pricing parameters when cart listing configuration indexes change
  useEffect(() => {
    if (jwt) {
      dispatch(getCart(jwt));
    }
  }, [jwt, cart?.cartItems?.length, dispatch]);

  return (
    <div className="w-full">
      {/* Verify dynamic listings boundaries before evaluating layout rows */}
      {cart?.cartItems && cart?.cartItems?.length > 0 ? (
        // Fixed Grid Layout: Mobile standard grid setup with structured responsive constraints
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 sm:px-8 lg:px-16 gap-6 relative">
          {/* Main items aggregation list scaffold viewport (Takes full width on mobile, 2 columns on desktop) */}
          <div className="col-span-1 lg:col-span-2 lg:px-5 bg-white">
            <div className="space-y-3">
              {cart?.cartItems?.map((item, index) => (
                <React.Fragment
                  key={
                    item?.id ||
                    item?.product?.id ||
                    `cart-item-${index}-${Math.random()}`
                  }
                >
                  <CartItem item={item} showButton={true} />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Centralized financial computation details side panel (Stack friendly heights adjusted for mobile display grids) */}
          <div className="px-0 sm:px-5 lg:sticky lg:top-5 h-auto lg:h-[calc(100vh-40px)] mt-4 lg:mt-0">
            <div className="border p-5 bg-white shadow-md rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({cart?.cart?.totalItem || 0} items)</span>
                  <span>₹{cart?.cart?.totalPrice || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  {/* Keep the original property '.discounte' intact as synchronized with backend mapping models */}
                  <span className="text-green-700">
                    -₹{cart?.cart?.discounte || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{cart?.cart?.totalDiscountedPrice || 0}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* Fallback display layout generated for empty user bags context */
        <div className="h-[85vh] flex justify-center items-center flex-col px-4">
          <div className="text-center py-5">
            <h1 className="text-lg font-bold text-gray-800">
              Hey, it feels so light!
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              There is nothing in your bag, let's add some items.
            </p>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            sx={{ py: "11px" }}
          >
            Add Item From Wishlist
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
