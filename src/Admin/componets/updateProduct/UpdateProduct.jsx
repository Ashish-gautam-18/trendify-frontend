import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { findProductById, updateProduct } from "../../../Redux/Customers/Product/Action";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const UpdateProductForm = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);

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

  // Inputs field text change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Sizes name and quantity change handler
  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    if (name === "size_quantity") name = "quantity";

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  // 🛠️ BUG FIXED: Submit handler ab sahi format me ID aur Data backend ko bhejega
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      productId: productId,
      data: productData
    };
    dispatch(updateProduct(requestData));
    console.log("Dispatching Update with Data:", requestData);
  };

  // Component load hone par Product ID ke base par database se details lana
  useEffect(() => {
    if (productId) {
      dispatch(findProductById({ productId }));
    }
  }, [productId, dispatch]);

  // Redux store me data aate hi auto-fill (populate) karna fields ko
  useEffect(() => {
    if (customersProduct?.product) {
      const product = customersProduct.product;
      setProductData({
        imageUrl: product.imageUrl || "",
        brand: product.brand || "",
        title: product.title || "",
        color: product.color || "",
        discountedPrice: product.discountedPrice || "",
        price: product.price || "",
        discountPersent: product.discountPersent || "",
        size: product.size?.length ? product.size : initialSizes,
        quantity: product.quantity || "",
        topLavelCategory: product.topLavelCategory || "",
        secondLavelCategory: product.secondLavelCategory || "",
        thirdLavelCategory: product.thirdLavelCategory || "",
        description: product.description || "",
      });
    }
  }, [customersProduct?.product]);

  return (
    <Fragment>
      {/* 🛠️ FIXED: Heading content correct kiya */}
      <Typography variant="h4" sx={{ textAlign: "center", py: 4, fontWeight: "bold" }}>
        Update Product Details
      </Typography>
      
      <form onSubmit={handleSubmit} className="p-5 min-h-screen">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Image URL" name="imageUrl" value={productData.imageUrl} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Brand" name="brand" value={productData.brand} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Title" name="title" value={productData.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Color" name="color" value={productData.color} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Total Quantity" name="quantity" value={productData.quantity} onChange={handleChange} type="number" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Original Price" name="price" value={productData.price} onChange={handleChange} type="number" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Discounted Price" name="discountedPrice" value={productData.discountedPrice} onChange={handleChange} type="number" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Discount Percentage" name="discountPersent" value={productData.discountPersent} onChange={handleChange} type="number" />
          </Grid>

          {/* Categories Dropdowns */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select name="topLavelCategory" value={productData.topLavelCategory} onChange={handleChange} label="Top Level Category">
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select name="secondLavelCategory" value={productData.secondLavelCategory} onChange={handleChange} label="Second Level Category">
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
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

          <Grid item xs={12}>
            <TextField fullWidth label="Description" multiline rows={3} name="description" value={productData.description} onChange={handleChange} />
          </Grid>

          {/* 🛠️ FIXED: Sizes fields uncommented aur data pre-populate ke liye map set hai */}
          {productData.size.map((size, index) => (
            <Grid container item spacing={2} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField label="Size Name" name="name" value={size.name} onChange={(e) => handleSizeChange(e, index)} required fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Quantity" name="size_quantity" value={size.quantity} type="number" onChange={(e) => handleSizeChange(e, index)} required fullWidth />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            {/* 🛠️ FIXED: Loop-insertion wala garbage button hata kar clean single action button rakha */}
            <Button variant="contained" size="large" type="submit" sx={{ px: 4, py: 1.5 }}>
              Update Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default UpdateProductForm;
