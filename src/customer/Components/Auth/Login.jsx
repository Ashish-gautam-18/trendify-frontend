import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material UI core entry components
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { getUser, login } from "../../../Redux/Auth/Action";

export default function LoginUserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  
  // Dynamic subscription reading application authentication payload profile state
  const { auth } = useSelector((store) => store);
  
  const handleCloseSnackbar = () => setOpenSnackBar(false);

  // Verification interceptor tracking authorization token existence
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  // Observer monitoring authentication dispatch feedback pipelines
  useEffect(() => {
    if (auth.error) {
      setOpenSnackBar(true);
    }
    if (auth.jwt || auth.user) {
      setOpenSnackBar(true);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1200);
    }
  }, [auth.jwt, auth.user, auth.error, navigate]);

  // Unified controller parsing user inputs from active form documents
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // FIX: setOpenSnackBar(true) yahan se hata diya. Pehle yeh turant Snackbar khol deta tha
    // dispatch(login()) complete hone se pehle hi, jisse purani/khaali auth state ke sath
    // Snackbar "Invalid Email or Password!" dikha deta tha, chahe login actually successful hone
    // wala ho. Ab Snackbar sirf tab khulega jab neeche wala useEffect asli result (auth.error ya
    // auth.jwt/auth.user) dekh lega.
    dispatch(login(userData));
  };

  return (
    <React.Fragment>
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="current-password"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">Don't have an account?</p>
          <Button onClick={() => navigate("/register")} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>

      {/* Dynamic feedback notification container */}
      <Snackbar open={openSnackBar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={auth.jwt || auth.user ? "success" : "error"} 
          sx={{ width: '100%' }}
        >
          {auth.jwt || auth.user ? "Login Success!" : "Invalid Email or Password!"}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}