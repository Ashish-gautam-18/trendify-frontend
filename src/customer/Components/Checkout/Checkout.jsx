import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Material UI onboarding layout wizard structures
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Child layout views for transaction pipeline execution
import AddDeliveryAddressForm from "./AddAddress";
import OrderSummary from "./OrderSummary";

// Consolidated progress indicators tracking transactional phases
const checkoutStepsMap = [
  "Login",
  "Delivery Address",
  "Order Summary",
  "Payment",
];

export default function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Parse dynamic string validation criteria safely from URL parameters into standard numeric forms
  const currentFunnelStep = Number(queryParams.get('step')) || 1; 
  const navigate = useNavigate();

  // Forward transition engine allocating critical identifier parameters into URL navigation maps
  const handleNext = (orderId) => {
    const nextStepIndex = currentFunnelStep + 1;
    if (orderId) {
      navigate(`/checkout?step=${nextStepIndex}&order_id=${orderId}`);
    } else {
      navigate(`/checkout?step=${nextStepIndex}`);
    }
  };

  // Revert active transactional stage bounds safely backward
  const handleBack = () => {
    navigate(`/checkout?step=${currentFunnelStep - 1}`);
  };

  return (
    <Box className="px-5 lg:px-32 w-full mt-10">
      {/* Synchronization stepper module linked directly with current location query state indexes */}
      <Stepper activeStep={currentFunnelStep - 1}> 
        {checkoutStepsMap.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {/* Verify pipeline boundary status thresholds before updating layout fragments viewports */}
      {currentFunnelStep > checkoutStepsMap.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 1, textAlignment: "center" }}>
            All steps completed - your order processing is finished.
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={currentFunnelStep === 2}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>

          {/* Conditional layout switch pipeline rendering child views mapping relative tracking indexes */}
          <div className="my-8">
            {currentFunnelStep === 2 ? (
              <AddDeliveryAddressForm handleNext={handleNext} />
            ) : (
              <OrderSummary />
            )}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
