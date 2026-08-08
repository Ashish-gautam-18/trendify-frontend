import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material UI core entry components
import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { createOrder } from "../../../Redux/Customers/Order/Action";

// Import custom address presentation card element (Verify your actual relative directory spelling path)
import AddressCard from "../adreess/AdreessCard";

export default function AddDeliveryAddressForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Read current active authorization profiles from the global state records
  const auth = useSelector((state) => state.auth);

  // FIX: Error message state add kiya taaki order fail hone par user ko dikh sake
  const [errorMsg, setErrorMsg] = useState("");

  // Parse and submit an entirely new shipment address configuration from active text inputs
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    const data = new FormData(event.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    // FIX: dispatch ka result store kiya aur check kiya ki order sach me bana ya nahi.
    // Pehle yeh check nahi hota tha, isliye order fail hone par bhi handleNext() chal
    // jata tha aur user blank Order Summary page par pahunch jata tha.
    const res = await dispatch(createOrder({ address, jwt, navigate }));

    if (res?.payload?.id) {
      handleNext(res.payload.id);
    } else {
      setErrorMsg(
        res?.payload || "Order create nahi ho paya. Kripya dobara koshish karein."
      );
    }
  };

  // Dispatch network tracking configurations using existing archived profile addresses records
  const handleCreateOrder = async (item) => {
    setErrorMsg("");
    const res = await dispatch(createOrder({ address: item, jwt, navigate }));

    // Evaluate async operational payload structures before jumping pipeline steps indicators
    if (res?.payload?.id) {
      handleNext(res.payload.id);
    } else {
      setErrorMsg(
        res?.payload || "Order create nahi ho paya. Kripya dobara koshish karein."
      );
    }
  };

  return (
    <Grid container spacing={4}>
      {/* FIX: Error message dikhane ke liye */}
      {errorMsg && (
        <Grid item xs={12}>
          <Alert severity="error">{errorMsg}</Alert>
        </Grid>
      )}

      {/* Left Column View: Loops out all historically saved user shipment profiles address logs */}
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-auto bg-white">
          {auth.user?.addresses?.map((item) => (
            <div
              key={item.id || item.zipCode}
              className="p-5 py-7 border-b cursor-default hover:bg-gray-50 transition-colors"
            >
              <AddressCard address={item} />

              <Box sx={{ mt: 2 }}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleCreateOrder(item);
                  }}
                >
                  Delivered Here
                </Button>
              </Box>
            </div>
          ))}
        </Box>
      </Grid>

      {/* Right Column View: Structured intake form framework creating new shipment profiles */}
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5 bg-white">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Delivered Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}