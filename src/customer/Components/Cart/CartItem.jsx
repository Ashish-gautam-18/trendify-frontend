import React from "react";
import { useDispatch } from "react-redux";

// Material UI layout typography and vector symbols
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  removeCartItem,
  updateCartItem,
} from "../../../Redux/Customers/Cart/Action";

// Reusable rows unit processing single catalog item rows inside shopping bag
const CartItem = ({ item, showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Dispatch network signals targeting central bucket item elimination
  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?.id, jwt };
    dispatch(removeCartItem(data));
  };

  // Programmatic increment/decrement execution for continuous inventory balances updates
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
      jwt,
    };
    dispatch(updateCartItem(data));
  };

  return (
    <div className="p-4 sm:p-5 shadow-md border rounded-md bg-white">
      <div className="flex items-start sm:items-center">
        {/* Isolated image layout scaffolding block */}
        <div className="w-[4.5rem] h-[4.5rem] sm:w-[6rem] sm:h-[6rem] lg:w-[9rem] lg:h-[9rem] flex-shrink-0 overflow-hidden rounded">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt={item?.product?.title || "Product Display"}
          />
        </div>

        {/* Central descriptive text block framework */}
        <div className="ml-3 sm:ml-5 space-y-1 flex-grow min-w-0">
          <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">
            {item?.product?.title}
          </p>

          {/* Safe string template fallback logic for handling attribute parameters tracking variables */}
          <p className="opacity-70 text-xs sm:text-sm">
            Size: {item?.size || "M"}{" "}
            {item?.product?.color ? `, ${item?.product?.color}` : ""}
          </p>
          <p className="opacity-70 text-xs sm:text-sm">
            Seller: {item?.product?.brand}
          </p>

          {/* Price structural breakdown comparison grid */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs sm:text-sm lg:text-base">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-bold text-gray-900">
              ₹{item?.product?.discountedPrice}
            </p>
            {/* Kept original database mapping token '.discountPersent' completely unchanged */}
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPersent}% off
            </p>
          </div>
        </div>
      </div>

      {/* Conditionally managed actions bar controls layer - Fixed layout for mobile alignment */}
      {showButton && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-50 mt-4">
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
              color="primary"
              aria-label="Decrease quantity"
              size="small"
            >
              <RemoveCircleOutlineIcon fontSize="small" />
            </IconButton>

            <span className="py-0.5 px-4 sm:px-7 border rounded-sm font-medium bg-gray-50 text-sm">
              {item?.quantity}
            </span>

            <IconButton
              onClick={() => handleUpdateCartItem(1)}
              color="primary"
              aria-label="Increase quantity"
              size="small"
            >
              <AddCircleOutlineIcon fontSize="small" />
            </IconButton>
          </div>

          <div className="flex text-sm lg:text-base">
            <Button
              onClick={handleRemoveItemFromCart}
              variant="text"
              color="error"
              size="small"
              sx={{
                justifyContent: { xs: "flex-start", sm: "center" },
                width: { xs: "100%", sm: "auto" },
                p: 0,
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
