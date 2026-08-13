import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Material UI layout typography and typography buttons
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";

// Layout tracking section grids mapping dynamic datasets and active category targets
const HomeProductSection = ({ section, data, categoryPath }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  // Dynamic responsive screen matrix defining viewport item distributions
 const responsiveLayoutBreakpoints = {
  0: { items: 3, itemsFit: "contain" },      // mobile: 2 → 3
  480: { items: 3.3, itemsFit: "contain" },  // small mobile, thoda peek dikhe
  768: { items: 4, itemsFit: "contain" },
  1024: { items: 5.5, itemsFit: "contain" },
};

  // Compile individual product profiles data objects securely into list components array
  const catalogCarouselItems = data?.slice(0, 10).map((productItem, index) => (
    <div key={index} className="px-1">
      <HomeProductCard product={productItem} categoryPath={categoryPath} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Category section descriptor label heading text row */}
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      
      <div className="relative border p-5 bg-white">
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={catalogCarouselItems}
          activeIndex={activeIndex}
          responsive={responsiveLayoutBreakpoints}
          onSlideChanged={syncActiveIndex}
          animationDuration={500}
        />

        {/* Forward slide incremental controller layout window button */}
        {activeIndex < catalogCarouselItems.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "10rem",
              right: "0rem",
              zIndex: 50,
              transform: "translateX(50%)",
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon />
          </Button>
        )}

        {/* Revert slide decremental controller layout window button */}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "10rem",
              left: "0rem",
              zIndex: 50,
              transform: "translateX(-50%)",
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
            aria-label="Previous slide"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)" }} /> 
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
