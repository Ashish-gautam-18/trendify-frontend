import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  "Placed",
  'Order Confirmed',
  'Shipped',
  'Out For Delivery',
  'Delivered'
];

export default function OrderTraker({ activeStep }) {
  return (
    <Box sx={{ width: '100%' }} className="py-4">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel 
              sx={{ 
                '& .MuiStepLabel-label': {
                  fontSize: '0.875rem', // Desktop aur mobile ke liye stable standard text size
                  fontWeight: 500,
                  color: '#4B5563' // Muted text color for inactive states
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: '#9155FD', // Active step highlight color
                  fontWeight: 600
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: '#10B981', // Green color accent for successfully completed milestones
                  fontWeight: 600
                }
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
