// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navigation from "./customer/Components/Navbar/Navigation";
// import CustomerRoutes from "./Routers/CustomerRoutes";
// import AdminRoutes from "./Routers/AdminRoutes";
// import NotFound from "./Pages/Notfound";
// import AdminPannel from "./Admin/AdminPannel";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getUser } from "./Redux/Auth/Action";
// // import Routers from './Routers/Routers';

// function App() {
//   // const {auth}=useSelector(store=>store);
//   const auth = useSelector(state => state.auth);
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt]);
//   return (
//     <div className="">
//       <Routes>
//         <Route path="/*" element={<CustomerRoutes />} />
//        {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<AdminPannel />} />}
//       </Routes>
//     </div>
//   );
// }

// export default App;



import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminPannel from "./Admin/AdminPannel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Public and Customer Features */}
        <Route path="/*" element={<CustomerRoutes />} />
        
        {/* Role Based Protected Admin Dashboard */}
        {auth.user?.role === "ROLE_ADMIN" && (
          <Route path="/admin/*" element={<AdminPannel />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
