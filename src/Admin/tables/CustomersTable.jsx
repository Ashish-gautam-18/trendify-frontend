import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { 
  Card, 
  Table, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell, 
  Typography, 
  TableContainer, 
  Avatar, 
  CardHeader 
} from '@mui/material';
import { getAllCustomers } from '../../Redux/Auth/Action';

const CustomersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Redux store se customer information nikalna
  const auth = useSelector(store => store.auth);
  const jwt = localStorage.getItem("jwt");

  // Load hote hi secure action dispatch karna
  useEffect(() => {
    if (jwt) {
      dispatch(getAllCustomers(jwt));
    }
  }, [jwt, dispatch]);

  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardHeader
        title='New Customers'
        sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        action={
          <Typography 
            onClick={() => navigate("/admin/customers")} 
            variant='caption' 
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
        <Table sx={{ minWidth: 390 }} aria-label='new customers dashboard table'>
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 🛠️ OPTIMIZED LOOP: Render filter completely using dynamic store database data */}
            {auth?.customers?.map((item) => (
              <TableRow 
                hover 
                key={item.id || item._id || item.email} 
                sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
              >
                {/* Safe Character Initial Display */}
                <TableCell> 
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    {item.firstName ? item.firstName[0].toUpperCase() : "U"}
                  </Avatar> 
                </TableCell>
                
                {/* Dynamic User Data fields */}
                <TableCell>
                  {item.firstName || "User"} {item.lastName || ""}
                </TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CustomersTable;
