import React from "react";
import { useDispatch } from "react-redux";

// Material UI layout typography and vector symbols
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";

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
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?.id, jwt };
    dispatch(updateCartItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md bg-white">
      <div className="flex items-center">
        {/* Isolated image layout scaffolding block */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] flex-shrink-0 overflow-hidden rounded">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt={item?.product?.title || "Product Display"}
          />
        </div>

        {/* Central descriptive text block framework */}
        <div className="ml-5 space-y-1">
          <p className="font-semibold text-gray-800">{item?.product?.title}</p>
          
          {/* Safe string template fallback logic for handling attribute parameters tracking variables */}
          <p className="opacity-70 text-sm">
            Size: {item?.size || "M"} {item?.product?.color ? `, ${item?.product?.color}` : ""}
          </p>
          <p className="opacity-70 text-sm">Seller: {item?.product?.brand}</p>
          
          {/* Price structural breakdown comparison grid */}
          <div className="flex space-x-2 items-center pt-3 text-sm lg:text-base">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-bold text-gray-900">₹{item?.product?.discountedPrice}</p>
            {/* Kept original database mapping token '.discountPersent' completely unchanged */}
            <p className="text-green-600 font-semibold">{item?.product?.discountPersent}% off</p>
          </div>
        </div>
      </div>

      {/* Conditionally managed actions bar controls layer */}
      {showButton && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton 
              onClick={() => handleUpdateCartItem(-1)} 
              disabled={item?.quantity <= 1} 
              color="primary" 
              aria-label="Decrease quantity"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm font-medium bg-gray-50">{item?.quantity}</span>
            
            <IconButton 
              onClick={() => handleUpdateCartItem(1)} 
              color="primary" 
              aria-label="Increase quantity"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button onClick={handleRemoveItemFromCart} variant="text" color="error">
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;



