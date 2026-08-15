// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// // Material UI layout composition components
// import { Grid, TextField, Button, Snackbar, Alert, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import { getUser, register } from "../../../Redux/Auth/Action";

// export default function RegisterUserForm() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [openSnackBar, setOpenSnackBar] = useState(false);
//   const jwt = localStorage.getItem("jwt");
  
//   // Subscribing to dynamic central user access metrics
//   const { auth } = useSelector((store) => store);
  
//   const handleClose = () => setOpenSnackBar(false);

//   // Structural bootstrap verifying global authorization keys
//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, dispatch]);

//   // Observer monitoring async registration success or duplicate data records validation results
//   useEffect(() => {
//     if (auth.user || auth.error) {
//       setOpenSnackBar(true);
      
//       // Upon successful authentication profiling, execute home route navigation redirection
//       if (auth.user) {
//         const redirectTimeout = setTimeout(() => {
//           navigate("/");
//         }, 1500);
//         return () => clearTimeout(redirectTimeout);
//       }
//     }
//   }, [auth.user, auth.error, navigate]);

//   // Intake pipeline compiling inputs directly from the user form element document
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
    
//     const userData = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       email: data.get("email"),
//       password: data.get("password"),
//       role: data.get("role")
//     };

//     dispatch(register(userData));
//   };

//   return (
//     <div className="">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="firstName"
//               name="firstName"
//               label="First Name"
//               fullWidth
//               autoComplete="given-name"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="lastName"
//               name="lastName"
//               label="Last Name"
//               fullWidth
//               autoComplete="family-name"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="email"
//               name="email"
//               label="Email"
//               fullWidth
//               autoComplete="email"
//             />
//           </Grid>
          
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel id="role-select-label">Role</InputLabel>
//               <Select
//                 labelId="role-select-label"
//                 id="role-select-field"
//                 label="Role"
//                 name="role"
//                 defaultValue="ROLE_CUSTOMER"
//               >
//                 <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
//                 <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
          
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="password"
//               name="password"
//               label="Password"
//               fullWidth
//               autoComplete="new-password"
//               type="password"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Button
//               className="bg-[#9155FD] w-full"
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{ padding: ".8rem 0" }}
//             >
//               Register
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

//       <div className="flex justify-center flex-col items-center">
//         <div className="py-3 flex items-center ">
//           <p className="m-0 p-0">Already have an account?</p>
//           <Button onClick={() => navigate("/login")} className="ml-5" size="small">
//             Login
//           </Button>
//         </div>
//       </div>

//       {/* Dynamic feedback notification container mapping response types automatically */}
//       <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
//         <Alert 
//           onClose={handleClose} 
//           severity={auth.error ? "error" : "success"} 
//           sx={{ width: '100%' }}
//         >
//           {auth.error ? auth.error : auth.user ? "Register Success!" : ""}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Material UI layout composition components
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { getUser, register } from "../../../Redux/Auth/Action";

export default function RegisterUserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const jwt = localStorage.getItem("jwt");
  
  // Subscribing to dynamic central user access metrics
  const { auth } = useSelector((store) => store);
  
  const handleClose = () => setOpenSnackBar(false);

  // Structural bootstrap verifying global authorization keys
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  // Observer monitoring async registration success or duplicate data records validation results
  useEffect(() => {
    if (auth.user || auth.error) {
      setOpenSnackBar(true);
      
      // Upon successful authentication profiling, execute home route navigation redirection
      if (auth.user) {
        const redirectTimeout = setTimeout(() => {
          navigate("/");
        }, 1500);
        return () => clearTimeout(redirectTimeout);
      }
    }
  }, [auth.user, auth.error, navigate]);

  // Intake pipeline compiling inputs directly from the user form element document
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // SECURITY: role field hata diya hai — role hamesha backend decide karega,
    // client (browser) se kabhi role accept nahi karna chahiye.
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(register(userData));
  };

  return (
    <div className="">
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
              autoComplete="new-password"
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">Already have an account?</p>
          <Button onClick={() => navigate("/login")} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>

      {/* Dynamic feedback notification container mapping response types automatically */}
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert 
          onClose={handleClose} 
          severity={auth.error ? "error" : "success"} 
          sx={{ width: '100%' }}
        >
          {auth.error ? auth.error : auth.user ? "Register Success!" : ""}
        </Alert>
      </Snackbar>
    </div>
  );
}