import React from "react";
import { Route, Routes } from "react-router-dom";

// Admin Panel ka main dashboard component import kiya hai
import AdminPannel from "../Admin/AdminPannel";

const AdminRoutes = () => {
  return (
    <div>
      {/* Routes block ke andar hum admin panel ke saare addresses (paths) define karte hain */}
      <Routes>
        {/* Jab bhi koi main '/admin' URL par aayega, toh use 'AdminPannel' screen dikhegi */}
        <Route path="/" element={<AdminPannel />}></Route>
      </Routes>
    </div>
  );
};

// Is file ko export kar rahe hain taaki App.js me ise use kiya ja sake
export default AdminRoutes;
