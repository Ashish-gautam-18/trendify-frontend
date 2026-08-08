import {
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../../Redux/Customers/Review/Action";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../../Redux/Customers/Product/Action";

const RateProduct = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [rating, setRating] = useState(4);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleRateProduct = (e, value) => {
    setRating(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatches form metadata seamlessly to the core active redux state manager
    dispatch(createReview({ review: formData.title, productId }));
    setFormData({ title: "", description: "" });
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    dispatch(findProductById({ productId }));
  }, [productId, dispatch]);

  return (
    <div className="px-5 lg:px-20">
      <h1 className="text-xl p-5 shadow-lg mb-8 font-bold">
        Rate & Review Product
      </h1>
      <Grid sx={{ justifyContent: "space-between" }} container>
        {/* Left column: Product Summary Insight Block */}
        <Grid
          className="flex lg:items-center shadow-lg border rounded-md p-5"
          item
          xs={12}
          lg={5.8}
        >
          <div>
            <img
              className="w-[5rem] lg:w-[15rem]"
              src={customersProduct.product?.imageUrl}
              alt={customersProduct.product?.title || "Product Showcase"}
            />
          </div>
          <div className="ml-3 lg:ml-5 space-y-2 lg:space-y-4">
            <p className="lg:text-lg">{customersProduct.product?.title}</p>
            <p className="opacity-50 font-semibold">
              {customersProduct.product?.brand}
            </p>
            <p>₹{customersProduct.product?.price}</p>
            <p>Size: Free</p>
            {customersProduct.product?.color && <p>Color: {customersProduct.product?.color}</p>}
            <div className="flex items-center space-x-3">
              <Rating name="read-only" value={4.6} precision={0.5} readOnly />
              <p className="opacity-60 text-sm">42807 Ratings</p>
              <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                3789 reviews
              </p>
            </div>
            <div>
              <p className="space-y-2 font-semibold flex items-center">
                <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered On Mar 03</span>
              </p>
              <p className="text-xs text-gray-500">Your Item Has Been Delivered</p>
            </div>
          </div>
        </Grid>

        {/* Right column: Review Forms Block */}
        <Grid item xs={12} lg={6}>
          <div className={`${!isLargeScreen ? "py-10" : ""} space-y-5`}>
            <div className="shadow-md border rounded-md p-5">
              <Typography className="font-semibold" component="legend">
                Rate This Product
              </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  handleRateProduct(event, newValue);
                }}
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-5 shadow-md border rounded-md"
            >
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.title}
                onChange={handleChange}
                name="title"
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                name="description"
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit Review
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RateProduct;
