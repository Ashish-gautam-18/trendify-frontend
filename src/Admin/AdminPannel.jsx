import * as React from "react";
// ** Material UI Layout Imports
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography"; 
import { ThemeProvider } from "@mui/material/styles"; // ✅ FIX: Ab yeh bilkul sahi Material UI se import ho raha hai
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";

// ** Sidebar ke liye Icons
import InboxIcon from "@mui/icons-material/MoveToInbox";

// ** Admin Panels ke baaki Components ke Imports
import { customTheme } from "./them/customeThem";
import AdminNavbar from "./Navigation/AdminNavbar";
import Dashboard from "./Views/Admin";
import { Route, Routes, useNavigate } from "react-router-dom";
//import DemoAdmin from "./Views/DemoAdmin";
import CreateProductForm from "./componets/createProduct/CreateProductFrom";
import ProductsTable from "./componets/Products/ProductsTable";
import OrdersTable from "./componets/Orders/OrdersTable";
import Customers from "./componets/customers/customers";
import UpdateProductForm from "./componets/updateProduct/UpdateProduct";

import "./AdminPannel.css";

// Sidebar ki width/chaodai (240 pixels)
const drawerWidth = 240;

// 📋 Admin Sidebar Menu options ka array
const menu = [
  {name:"Dashboard", path:"/admin"},
  {name:"Products", path:"/admin/products"},
  {name:"Customers", path:"/admin/customers"},
  {name:"Orders", path:"/admin/orders"},
  {name:"Total Earnings", path:"/admin"},
  {name:"Weekly Overview", path:"/admin"},
  {name:"Monthly Overview", path:"/admin"},
  {name:"Add Product", path:"/admin/product/create"},
];

export default function AdminPannel() {
  const theme = useTheme();
  // 📱 Check karte hain ki screen badi hai (Laptop) ya chhoti (Mobile)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();

  // 🗄️ DRAWER CONTENT: Sidebar ke andar ka design aur items
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <div>
        {isLargeScreen && <Toolbar />}
        
        {/* ✨ Branding Title: Panel ke upar aapka custom logo aur name 'Trendify Admin' */}
        <Box sx={{ px: 2.5, py: 2, borderBottom: '1px solid rgba(255,255,255,0.08)', mb: 1 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '15px', letterSpacing: '1px', color: '#6366f1' }}>
            TRENDIFY <span style={{ color: '#fff' }}>ADMIN</span>
          </Typography>
        </Box>

        <List>
          {/* 🏠 View Storefront Link: Is par click karte hi admin sidhe website ke main homepage par ja sakega */}
          <ListItem disablePadding onClick={() => navigate("/")}>
            <ListItemButton sx={{ bgcolor: 'rgba(99, 102, 241, 0.05)', '&:hover': { bgcolor: 'rgba(99, 102, 241, 0.15)' } }}>
              <ListItemIcon sx={{ color: '#6366f1' }}>🏠</ListItemIcon>
              <ListItemText 
                primary="View Storefront" 
                primaryTypographyProps={{ fontSize: '13px', fontWeight: 700, color: '#6366f1' }} 
              />
            </ListItemButton>
          </ListItem>
          
          <Divider sx={{ my: 1 }} />

          {/* 🔄 Loop: Menu array se saare options nikal kar list bana rahe hain */}
          {menu.map((item) => (
            <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '13px' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>

      {/* ⚙️ Sidebar ke bilkul niche Account aur Request wale buttons */}
      <List sx={{ width: "100%", mt: 'auto' }}>
        <Divider />
        {["Account", "Request"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: '13px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Mobile views me sidebar control karne ke functions
  const handleSideBarViewInMobile = () => { setSideBarVisible(true); };
  const handleCloseSideBar = () => { setSideBarVisible(false); };

  // Laptop par hamesha dikhega (permanent), mobile par pop-up bankar aayega (temporary)
  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />
        {/* 🌐 Top Navigation Bar */}
        <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />

        {/* 🗄️ Sidebar Component */}
        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]: {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  height: "100%",
                  zIndex: (theme) => theme.zIndex.drawer + 2,
                },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>

        {/* 📺 Right Main Panel Container: Yahan par links ke mutabik screens change hongi */}
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm/>}></Route>
            <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
            <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}






