import React from "react";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Prevent default native browser behavior when a slide image is dragged
const handleDragStart = (event) => event.preventDefault();

// Reusable display slideshow processing collection of landing catalog banner highlights
const HomeCarousel = ({ images }) => { 
  const navigate = useNavigate();
  
  // Safe validation check rendering nothing if the image document array is completely empty
  if (!images || images.length === 0) {
    return null;
  }

  // Programmatically parse input documents array directly into interactive slide components
  const carouselItems = images.map((slideItem, index) => (
    <div key={index} className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
      <img
        className="cursor-pointer rounded-md w-full h-[300px] md:h-[450px] min-h-[300px] object-cover block"
        onClick={() => navigate(slideItem.path)}
        src={slideItem.image}
        alt={`store-slide-${index}`}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  ));
  
  return (
    // Unified outer layout scaffold encapsulating full carousel slider views
    <div className="w-full block relative my-5 clear-both">
      <AliceCarousel
        mouseTracking
        items={carouselItems}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls={true} 
        disableDotsControls={false} 
      />
    </div>
  );
};

export default HomeCarousel;
