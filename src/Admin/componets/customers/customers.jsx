import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  Avatar,
} from "@mui/material";
import { getAllCustomers } from "../../../Redux/Auth/Action";

const Customers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Redux store se auth state nikalna
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  // Component load hone par saare customers fetch karna
  useEffect(() => {
    if (jwt) {
      dispatch(getAllCustomers(jwt));
    }
  }, [jwt, dispatch]);

  return (
    <Card>
      <CardHeader
        title="New Customers"
        sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        action={
          <Typography 
            onClick={() => navigate("/admin/customers")} 
            variant="caption" 
            sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem", fontWeight: "bold" }}
          >
            View All
          </Typography>
        }
        titleTypographyProps={{
          variant: 'h5',
          sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label="customers dashboard table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 🛠️ BUG FIXED: Optional chaining (?.) joda taaki data load hote waqt page crash na ho */}
            {auth?.customers?.map((item) => (
              <TableRow 
                hover 
                key={item.id || item._id || item.email} 
                sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
              >
                {/* 🛠️ BUG FIXED: Name ka first letter safe tarike se check kiya fallback ke sath */}
                <TableCell>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    {item.firstName ? item.firstName[0].toUpperCase() : "U"}
                  </Avatar>
                </TableCell>
                
                {/* Full Name Display */}
                <TableCell>
                  {item.firstName || "User"} {item.lastName || ""}
                </TableCell>
                
                {/* Customer Email */}
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Customers;
