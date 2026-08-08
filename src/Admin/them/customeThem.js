// ** Material UI se styles setup karne ka main tool import kiya
import { createTheme } from "@mui/material/styles";

// 🛡️ 1. ADMIN PANEL THEME (customTheme): Admin dashboard ko premium dark blue look dene ke liye
const customTheme = createTheme({
  palette: {
    mode: "dark", // Admin panel hamesha Dark Mode me khulega
    primary: {
      main: '#9155FD', // Main primary purple rang buttons aur icons ke liye
    },
    secondary: {
      main: '#f48fb1', // Secondary pink rang highlights ke liye
    },
    white: {
      main: "#fff"
    },
    orange: {
      main: "#ffdb0f"
    },
    background: {
      // ✅ FIX: Khali default string hatayi, paper background ko deep dark blue (0,0,22) kiya
      paper: "rgb(0, 0, 22)" 
    },
  },
});

// 🛍️ 2. CUSTOMER PLATFORM THEME (customerTheme): Grahako ke liye shopping website ko saaf aur light rakhne ke liye
const customerTheme = createTheme({
  palette: {
    mode: "light", // Customers ke saare shopping pages Light Mode me khulenge
    primary: {
      main: '#9155FD', // Brand matching ke liye primary rang same rakha hai
    },
    secondary: {
      main: '#f48fb1',
    },
    white: {
      main: "#fff"
    },
    orange: {
      main: "#ffdb0f"
    },
    background: {
      paper: "white" // Shopping pages ke cards aur containers ka background white rahega
    },
  },
});

// ✅ FIX: Faltu aur unused 'darkTheme' ko safe tarike se hata diya gaya hai
export { customTheme, customerTheme };
