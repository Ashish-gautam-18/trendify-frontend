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
    <div
      key={index}
      className="w-full bg-gray-50 flex justify-center items-center overflow-hidden"
    >
      <img
        // Fixed Image Classes: Mobile par height dynamic auto aur object-contain rahega taaki image na kate
        className="cursor-pointer rounded-md w-full h-auto sm:h-[350px] md:h-[450px] object-contain sm:object-cover block"
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
    <div className="w-full block relative my-3 sm:my-5 clear-both px-2 sm:px-0">
      <AliceCarousel
        mouseTracking
        items={carouselItems}
        autoPlay
        infinite
        autoPlayInterval={2500} // Dynamic change tracking slider speeds slightly adjusted
        disableButtonsControls={true}
        disableDotsControls={false}
      />
    </div>
  );
};

export default HomeCarousel;
