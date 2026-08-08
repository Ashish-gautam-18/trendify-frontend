import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TermsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
// import Cart = from "../customer/Components/Cart/Cart";
import Cart from "../customer/Components/Cart/Cart";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import SearchProduct from "../customer/Components/Product/Product/SearchProduct";
import NotFound from "../Pages/NotFound"; 

import { ThemeProvider } from '@mui/material/styles';
import { customerTheme } from "../Admin/them/customeThem";

const CustomerRoutes = () => {
    return (
        <div>
            <ThemeProvider theme={customerTheme}>
                {/* ✅ FIX: Faltu dynamic condition hata kar seedhe Navigation lagaya */}
                <Navigation />
                
                <Routes>
                    <Route path="/login" element={<Homepage />} />
                    <Route path="/register" element={<Homepage />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products/search" element={<SearchProduct />} />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    
                    {/* ✅ FIX: Spelling correct ki */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-condition" element={<TermsCondition />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/account/order" element={<Order />} />
                    <Route path="/account/order/:orderId" element={<OrderDetails />} />
                    <Route path="/account/rate/:productId" element={<RateProduct />} />
                    <Route path="/checkout" element={<Checkout />} />
                    
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                
                <Footer />
            </ThemeProvider>
        </div>
    );
};

export default CustomerRoutes;
