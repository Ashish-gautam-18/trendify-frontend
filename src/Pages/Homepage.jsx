import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";

const myntraCategories = [
  { 
    name: "Ethnic Wear", 
    discount: "50-80% OFF", 
    image: "/images/banner/trendify.webp", 
    path: "women/clothing/lengha_choli" 
  },
  { 
    name: "Treditional Kurta", 
    discount: "30-70% OFF", 
    image: "/images/banner/trendify1.webp", 
    path: "men/clothing/mens_kurta" 
  },
  { 
    name: "Casuals Top", 
    discount: "FLAT 60% OFF", 
    image: "/images/banner/trendify2.webp", 
    path: "women/clothing/top"
  },
  { 
    name: "Treditional Saree", 
    discount: "UNDER ₹1999", 
    image: "/images/banner/trendify6.webp", 
    path: "women/clothing/saree"
  },
  { 
    name: "Footwear", 
    discount: "MIN. 40% OFF", 
    image: "/images/banner/trendify3.webp", 
    path: "men/footwear/shoes" 
  },
  { 
    name: "Mens Ethnic", 
    discount: "UPTO 70% OFF", 
    image: "/images/banner/trendify5.webp", 
    path: "men/clothing/shirt"  
  },
];

const myntraDeals = [
  { title: "Trending Kurtas", offer: "Min. 50% Off", bg: "bg-rose-50", text: "text-rose-600", path: "men/clothing/mens_kurta" },
  { title: "Grand Wedding Wear", offer: "Upto 70% Off", bg: "bg-amber-50", text: "text-amber-700", path: "women/clothing/lengha_choli" },
  { title: "Premium Sarees", offer: "Flat 60% Off", bg: "bg-purple-50", text: "text-purple-700", path: "women/clothing/saree" },
  { title: "Sneaker Store", offer: "Free Shipping", bg: "bg-teal-50", text: "text-teal-700", path: "men/footwear/shoes" },
];

const Homepage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white min-h-screen text-gray-800">
      
      {/* Category Section with Deals */}
      <div className="max-w-[1300px] mx-auto px-12 pt-1 pb-4">
        <h2 className="text-xl font-bold tracking-wider text-gray-900 text-center uppercase mb-6 -mt-2">
          Omg! Deals of the day
        </h2>
        <div className="flex items-center justify-center gap-14 overflow-x-auto py-2">
          {myntraCategories.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate(`/${item.path}`)}
              className="flex flex-col items-center cursor-pointer group min-w-[110px]"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <h3 className="font-bold text-xs text-gray-900 mt-2 text-center whitespace-nowrap">{item.name}</h3>
              <p className="text-[10px] font-semibold text-rose-500 mt-0.5">{item.discount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Hero Image Carousel */}
      <HomeCarousel images={homeCarouselData} />

      {/* Budget Stores and Offers Section */}
      <div className="max-w-[1300px] mx-auto px-4 mt-14">
        <h2 className="text-xl font-bold tracking-wider text-gray-900 text-center uppercase mb-6">
          Explore Top Budgets & Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {myntraDeals.map((deal, index) => (
            <div 
              key={index}
              onClick={() => navigate(`/${deal.path}`)}
              className={`${deal.bg} p-5 rounded-xl border border-gray-50 flex flex-col justify-between h-36 cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-sm`}
            >
              <div>
                <h3 className="text-sm font-bold text-gray-700">{deal.title}</h3>
                <p className={`${deal.text} font-black text-lg mt-0.5`}>{deal.offer}</p>
              </div>
              <span className={`${deal.text} text-[10px] font-bold uppercase tracking-wider`}>
                Shop Now →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Product Collections Grid */}
      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Trendify Ethnic – Men's Luxury Kurtas"} categoryPath="men/clothing/mens_kurta" />
        <HomeProductSection data={kurtaPage1} section={"Urban Chic – Women's Designer Kurtas"} categoryPath="women/clothing/women_kurta" />
        <HomeProductSection data={mensShoesPage1} section={"Urban Sneakers & Footwear"} categoryPath="men/footwear/shoes" />
        <HomeProductSection data={lengha_page1} section={"Lengha Choli"} categoryPath="women/clothing/lengha_choli" />
        <HomeProductSection data={sareePage1} section={"Heritage Silk & Premium Sarees"} categoryPath="women/clothing/saree" />
        <HomeProductSection data={dressPage1} section={"Modern Streetwear – Dresses & Tops"} categoryPath="women/clothing/women_dress" />
        <HomeProductSection data={gounsPage1} section={"Trendify Premium – Evening Gowns"} categoryPath="women/clothing/gouns" />
      </div>

    </div>
  );
};

export default Homepage;
