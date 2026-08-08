import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Grid } from "@mui/material";

const ProductReviewCard = ({ item }) => {
  const [value, setValue] = React.useState(4.5);
  
  return (
    <div className="mb-4">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item?.user?.firstName || "User"}
              src=""
            >
              {item?.user?.firstName ? item.user.firstName[0].toUpperCase() : "U"}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">{item?.user?.firstName || "Anonymous"}</p>
              <p className="opacity-70">{item?.createdAt ? new Date(item.createdAt).toLocaleDateString() : "April 5, 2023"}</p>
            </div>
            <div>
              <Rating
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
            <p className="text-gray-700">
              {item?.review || "No review content provided."}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
