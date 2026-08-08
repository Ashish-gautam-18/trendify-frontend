import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { deleteProduct, findProducts } from "../../../Redux/Customers/Product/Action";

const ProductsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Redux store se customer product state nikalna
  const customersProduct = useSelector((store) => store.customersProduct);

  // URL params se pagination aur filters read karna
  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  // Pagination change handler
  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value - 1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  // Products fetch karne ke liye useEffect
  useEffect(() => {
    const data = {
      category: category || "", 
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber: page ? Number(page) : 0,
      pageSize: 10,
      stock: availability || undefined,
    };
    dispatch(findProducts(data));
  }, [availability, category, sort, page, customersProduct.deleteProduct, dispatch]);

  // Product delete karne ka handler
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <Box width={"100%"}>
      <Card className="mt-2">
        <CardHeader
          title="All Products"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customersProduct?.products?.content?.map((item) => (
                <TableRow
                  hover
                  key={item.id || item._id}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  {/* Product Image */}
                  <TableCell>
                    <Avatar alt={item.title || "Product"} src={item.imageUrl} />
                  </TableCell>

                  {/* Title & Brand */}
                  <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  
                  {/* Category */}
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.category?.name || "N/A"}
                  </TableCell>
                  
                  {/* Price */}
                  <TableCell sx={{ textAlign: "center" }}>
                    ₹{item.discountedPrice}
                  </TableCell>
                  
                  {/* Quantity */}
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.quantity}
                  </TableCell>

                  {/* Delete Button */}
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      variant="text"
                      color="error"
                      onClick={() => handleDeleteProduct(item.id || item._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Pagination Section */}
      <Card className="mt-2 border">
        <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
          <Pagination
            count={customersProduct.products?.totalPages || 1}
            color="primary"
            page={page ? Number(page) + 1 : 1}
            onChange={handlePaginationChange}
          />
        </div>
      </Card>
    </Box>
  );
};

export default ProductsTable;
