import React from "react";
// ** MUI Imports: Card ka sundar design banane ke liye Material UI ke components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports: Card ke kone mein 3-dots (more options) wala icon dikhane ke liye
import DotsVertical from "mdi-material-ui/DotsVertical";

const CardStatsVertical = (props) => {
  // ** Props: Dashboard se jo data is card ke andar bheja jayega (Title, Stats, Icon, etc.)
  const { title, subtitle, color, icon, stats, trend, trendNumber } = props;

  return (
    <Card>
      {/* CardContent: Card ke andar ka main padding area */}
      <CardContent>
        
        {/* 🔝 Top Row: Jahan Icon aur 3-Dots setting button dikhega */}
        <Box
          sx={{
            display: "flex",
            marginBottom: 3.25,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/* Avatar: Gol ghere ke andar card ka main icon aur uska background color */}
          <Avatar
            sx={{
              boxShadow: 3,
              marginRight: 4,
              color: "common.white",
              backgroundColor: `${color}.main`, // Dynamic color jo dashboard se aayega
            }}
          >
            {icon}
          </Avatar>
          
          {/* 3-dots menu button */}
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        </Box>
        
        {/* 🏷️ Title Section: Jaise "Total Sales" ya "New Orders" */}
        <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
          {title}
        </Typography>
        
        {/* 📊 Numbers & Trend Section: Jahan main data aur percentage dikhta hai */}
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexWrap: "wrap",
            marginBottom: 1,
            alignItems: "center",
          }}
        >
          {/* Stats: Main number jaise "₹45,200" */}
          <Typography variant="h6" sx={{ mr: 2 }}>
            {stats}
          </Typography>

          {/* Trend Number: Jo batata hai business kitna % upar ya neeche gaya */}
          {/* 🔥 JADOO LINE: Agar trend positive hai toh GREEN, nahi toh RED color dikhao */}
          <Typography
            variant="caption"
            sx={{ color: trend === "positive" ? "success.main" : "error.main" }}
          >
            {trendNumber}
          </Typography>
        </Box>
        
        {/* Subtitle: Card ke sabse neeche ka chhota text (Jaise: "Weekly Report") */}
        <Typography variant="caption">{subtitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardStatsVertical;

// 🛡️ Default Settings: Agar dashboard se koi color ya trend na bheje, toh yeh backup set hai
CardStatsVertical.defaultProps = {
  color: "primary",
  trend: "positive",
};




