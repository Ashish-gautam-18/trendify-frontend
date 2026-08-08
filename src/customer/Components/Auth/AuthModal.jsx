import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Material UI core structural modal components
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Authorization sub-modules for user intake pipelines
import RegisterUserForm from "./Register";
import LoginUserForm from "./Login";

// Layout coordinate positioning for rendering the central dynamic popup pane
const modalLayoutStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
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
      size="large"
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
