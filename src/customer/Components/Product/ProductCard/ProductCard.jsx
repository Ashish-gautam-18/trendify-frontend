import React from 'react';
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  // Destructure core attributes present across standard dataset types
  const { title, brand, price, color } = product;
  const navigate = useNavigate();

  const handleNavigate = () => {
    /* 
      Safeguard constraint: If the user clicks on display-only template categories 
      (shoes, gowns, or women_kurta), intercept and show an informational feedback alert.
    */
    if (
      product.selling_price || 
      product.disscount || 
      product.thirdLavelCategory === "gowns" || 
      product.thirdLavelCategory === "women_kurta"
    ) {
      alert("Trendyfy Info: This specific product is currently for display purposes only. To test the complete purchasing and checkout flow, please explore our core active categories like Sarees, Dresses, or Men's Kurtas.");
    } else {
      // Core production active catalog items proceed to product specifications seamlessly
      const productId = product?.id || product?._id || "1";
      navigate(`/product/${productId}`);
    }
  };

  // Resolve and format dynamic database layout URLs safely
  let databaseUrl = product?.imageUrl || product?.image || "";
  
  const imageUrl = databaseUrl.includes("com/imageUrl/") 
    ? databaseUrl.replace("com/imageUrl/", "com/image/") 
    : databaseUrl;

  /*
    Normalize component prices dynamically since local shoes schemas pre-append currencies 
    while dynamic backend database items store them as pure numerical nodes.
  */
  const displayDiscountedPrice = product.discountedPrice 
    ? `₹${product.discountedPrice}` 
    : (product.selling_price || "₹0");

  const displayOriginalPrice = price 
    ? (String(price).startsWith('₹') ? price : `₹${price}`) 
    : "₹0";

  /*
    Safeguard typo inconsistencies on backend schemas mapping fields between 
    'discountPersent', 'disscount', or 'discount' interchangeably.
  */
  const displayDiscountPercent = product.discountPersent 
    ? `${product.discountPersent}% off` 
    : (product.disscount || product.discount || "0% off");

  return (
   <div onClick={handleNavigate} className='productCard w-full border m-1 sm:m-3 transition-all cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md'>
    <div className='h-40 sm:h-72 md:h-[20rem] bg-gray-50 flex items-center justify-center relative'>
        <img 
          className='h-full w-full object-cover object-left-top' 
          src={imageUrl} 
          alt={title} 
          loading="lazy"
        />
        <span className="absolute text-[10px] sm:text-xs text-gray-400 bottom-2 right-2">Trendify Shop</span>
    </div>
    <div className='textPart bg-white p-2 sm:p-3'>
        <div>
            <p className='font-bold opacity-60 text-sm sm:text-base'>{brand}</p>
            <p className='truncate text-xs sm:text-sm text-gray-700'>{title}</p>
            <p className='font-semibold opacity-50 text-[10px] sm:text-xs mt-1'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center mt-2'>
            <p className='font-semibold text-sm sm:text-base'>{displayDiscountedPrice}</p>
            <p className='opacity-50 line-through text-xs sm:text-sm'>{displayOriginalPrice}</p>
            <p className='text-green-600 font-semibold text-[10px] sm:text-xs'>{displayDiscountPercent}</p>
        </div>
    </div>
   </div>
  );
};

export default ProductCard;