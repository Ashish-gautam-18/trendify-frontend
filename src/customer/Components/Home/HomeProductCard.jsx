import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable individual showcase atom item component parsing product cards on homepage lists
const HomeProductCard = ({ product, categoryPath }) => {
  const navigate = useNavigate();

  // Route forward path management tracking direct item details viewports profiles
  const handleNavigate = () => {
    if (product?.id) {
      navigate(`/product/${product.id}`);
    } else {
      const targetPath = categoryPath || "men/clothing/mens_kurta";
      navigate(`/${targetPath}`);
    }
  };

  // Centralized asset parsing engine cleaning incoming database image path parameters strings
  const getImageUrl = () => {
    let imgStr = product?.imageUrl || product?.image || "";
    
    if (typeof imgStr === "string") {
      // Normalize layout path directories structure string format mapping rules
      imgStr = imgStr.replace("/imageUrl/", "/image/");
      
      // Isolate active clean base string data by segmenting auxiliary query arguments
      return imgStr.split("?")[0];
    }
    return "";
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full mx-1 sm:mx-2 transition-transform duration-300 hover:scale-105 border border-gray-100"
    >
      {/* Container wrapper frame hosting the clean asset image graphics layout */}
      <div className="h-32 w-full sm:h-52 mt-3 flex items-center justify-center overflow-hidden">
        <img
          className="object-cover object-top w-full h-full"
          src={getImageUrl()} 
          alt={product?.title || "Store Collection Product"}
          loading="lazy"
          onError={(event) => {
            // Apply standard premium placeholder if asset linkages evaluate validation failure
            event.target.src = "https://unsplash.com";
          }}
        />
      </div>

      {/* Product identifier descriptors and metadata text box blocks */}
      <div className="p-4 text-center w-full">
        <h3 className="text-sm font-bold text-gray-900 truncate px-2">
          {product?.brand || "Premium Brand"}
        </h3>
        <p className="mt-1 text-xs text-gray-500 truncate px-2">
          {product?.title}
        </p>
      </div>
    </div>
  );
};

export default HomeProductCard;


