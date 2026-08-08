import React from "react";
// ** MUI Layout Imports: Dashboard ko responsive grid dene ke liye
import Grid from "@mui/material/Grid";
import AdminPannel from "../../Styles/AdminPannelWrapper";

// ** Dashboard Widgets ke Imports (Saare graphs aur tables)
import Achivement from "../tables/Achivement"; 
import MonthlyOverview from "../tables/MonthlyOverView";
import WeeklyOverview from "../tables/WeeklyOverview";
import TotalEarning from "../tables/TotalEarning";
import CardStatsVertical from "../../Styles/CardStatsVertical";
import CustomersTable from "../tables/CustomersTable";
import RecentlyAddeddProducts from "../tables/RecentlyAddeddProducts";
import SalesOverTime from "../tables/SalesOverTime";
import RecentOrders from "../tables/RecentOrders";

// Material UI Formatting and Theme system
import { ThemeProvider, createTheme } from "@mui/material";
import "./Admin.css";

// ** Icons Imports: Indian eCommerce ke liye CurrencyInr ka use kiya
import { BriefcaseVariantOutline, CurrencyInr, HelpCircleOutline, Poll } from "mdi-material-ui";

// 🎨 PREMIUM INTERVIEW THEME: Code With Zosh se bilkul alag karne ke liye custom Dark Theme
const darkTheme1 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo color
    },
    secondary: {
      main: '#ec4899', // Pink-rose color
    },
    background: {
      default: '#0f172a', // Deep royal dark
      paper: '#1e293b'    // Cards surface color
    }
  },
});

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* ThemeProvider lagane se dashboard premium dark look me dikhega */}
      <ThemeProvider theme={darkTheme1}>
        {/* AdminPannel style wrapper jo charts ke fonts ko set karega */}
        <AdminPannel>
          {/* Grid Container: Jo alag-alag screen sizes par widgets ko auto-adjust karega */}
          <Grid container spacing={2}>
            
            {/* 🏆 Top Widgets Row */}
            <Grid item xs={12} md={4}><Achivement /></Grid>
            <Grid item xs={12} md={8}><MonthlyOverview /></Grid>
            <Grid item xs={12} md={6} lg={4}><WeeklyOverview /></Grid>
            <Grid item xs={12} md={6} lg={4}><TotalEarning /></Grid>
            
            {/* 📊 Small Stats Cards Section (Re-usable CardStatsVertical Component) */}
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                {/* 🇮🇳 Indian Currency Setup */}
                <Grid item xs={6}>
                  <CardStatsVertical stats="₹25.6k" icon={<Poll />} color="success" trendNumber="+42%" title="Total Profit" subtitle="Weekly Profit" />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical stats="₹78" title="Refunds" trend="negative" color="secondary" trendNumber="-15%" subtitle="Past Month" icon={<CurrencyInr />} />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical stats="862" trend="negative" trendNumber="-18%" title="New Orders" subtitle="Weekly Orders" icon={<BriefcaseVariantOutline />} />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical stats="15" color="warning" trend="negative" trendNumber="-18%" subtitle="Last Week" title="Sales Queries" icon={<HelpCircleOutline />} />
                </Grid>
              </Grid>
            </Grid>

            {/* 📋 Data Tables Section: Customers, Orders aur Products ki reports */}
            <Grid item xs={12} md={6} lg={4}><CustomersTable /></Grid>
            <Grid item xs={12} md={12} lg={8}><RecentOrders /></Grid>
            <Grid item xs={12} md={12} lg={8}><RecentlyAddeddProducts /></Grid>
            
            {/* 📈 Sales Over Time Graph Widget */}
            <Grid item xs={12} md={6} lg={4}><SalesOverTime/></Grid>
            
            {/* ✅ FIX: Duplicate CustomersTable line ko safe tarike se hata diya gaya hai */}
          </Grid>
        </AdminPannel>
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;
