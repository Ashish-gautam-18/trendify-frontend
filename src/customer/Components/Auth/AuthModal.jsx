import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Material UI core structural modal components
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Authorization sub-modules for user intake pipelines
import RegisterUserForm from "./Register";
import LoginUserForm from "./Login";

// Fixed Responsive Layout coordinate positioning object
const modalLayoutStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // Responsive Width Setup: Mobile view standard viewport scale constraints handler
  width: {
    xs: "92%", // Mobile devices (extra small screens) par 92% width lega tacki page border se touch na ho
    sm: "85%", // Tablets par 85% width lega
    md: 500, // Laptop aur desktops par pehle jaisa exact 500px ka box rahega
  },
  maxWidth: "500px", // Badi screen par maximum limits 500px check block sync
  bgcolor: "background.paper",
  boxShadow: 24,
  // Responsive Padding: Mobile par thodi kam padding, desktop par proper spaces
  p: {
    xs: 2.5, // Mobile view padding space reduction constraints template
    md: 4, // Laptop mode normal standard layout padding parameter
  },
  outline: "none", // Material UI modal boundary selection black lines hide indicator
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();

  // Dynamic subscription tracking global authentication profiles
  const auth = useSelector((state) => state.auth);

  // Automatically dismiss active credentials interface overlay upon verified token execution
  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
  }, [auth.user, handleClose]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* Box layout containing the target structural workflow form viewports */}
      <Box className="rounded-md" sx={modalLayoutStyles}>
        {location.pathname === "/login" ? (
          <LoginUserForm />
        ) : (
          <RegisterUserForm />
        )}
      </Box>
    </Modal>
  );
}
