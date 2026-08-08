import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { createProduct } from "../../../Redux/Customers/Product/Action";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });

  // Basic Input Field Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Size Array Handler
  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    const updatedName = name === "size_quantity" ? "quantity" : name;

    const sizes = [...productData.size];
    sizes[index] = {
      ...sizes[index],
      [updatedName]: updatedName === "quantity" ? parseInt(value) || 0 : value
    };

    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      dispatch(createProduct({ data: productData, jwt }));
      alert("Product Added Successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Something went wrong while adding the product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Typography variant="h4" sx={{ textAlign: "center", py: 4, fontWeight: "bold" }}>
        Add New Product
      </Typography>
      
      <form onSubmit={handleSubmit} className="p-5 min-h-screen">
        <Grid container spacing={2}>
          {/* Basic Fields */}
          <Grid item xs={12}>
            <TextField fullWidth label="Image URL" name="imageUrl" value={productData.imageUrl} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Brand" name="brand" value={productData.brand} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Title" name="title" value={productData.title} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Color" name="color" value={productData.color} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Total Quantity" name="quantity" value={productData.quantity} onChange={handleChange} type="number" required />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Original Price" name="price" value={productData.price} onChange={handleChange} type="number" required />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Discounted Price" name="discountedPrice" value={productData.discountedPrice} onChange={handleChange} type="number" required />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Discount Percentage" name="discountPersent" value={productData.discountPersent} onChange={handleChange} type="number" required />
          </Grid>

          {/* Categories Dropdowns */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required>
              <InputLabel>Top Level Category</InputLabel>
              <Select name="topLavelCategory" value={productData.topLavelCategory} onChange={handleChange} label="Top Level Category">
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required>
              <InputLabel>Second Level Category</InputLabel>
              <Select name="secondLavelCategory" value={productData.secondLavelCategory} onChange={handleChange} label="Second Level Category">
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required>
              <InputLabel>Third Level Category</InputLabel>
              <Select name="thirdLavelCategory" value={productData.thirdLavelCategory} onChange={handleChange} label="Third Level Category">
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="Dresses">Dresses</MenuItem>
                <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                <MenuItem value="Saree">Saree</MenuItem>
                <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField fullWidth label="Description" multiline rows={3} name="description" value={productData.description} onChange={handleChange} required />
          </Grid>

          {/* Sizes Sections */}
          {productData.size.map((size, index) => (
            <Grid key={size.name || index} container item spacing={3} sx={{ mt: 0.5 }}>
              <Grid item xs={12} sm={6}>
                <TextField label="Size Name" name="name" value={size.name} onChange={(event) => handleSizeChange(event, index)} required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* 🛠️ FIXED: value={size.quantity} add kiya controlled component workflow ke liye */}
                <TextField label="Quantity" name="size_quantity" value={size.quantity} type="number" onChange={(event) => handleSizeChange(event, index)} required fullWidth />
              </Grid>
            </Grid>
          ))}

          {/* Submit Button with Loading Indicator */}
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Button variant="contained" sx={{ p: 1.5, minWidth: "180px" }} color="primary" size="large" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Add New Product"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
