// --- USER REGISTER (Naya Account Banana) ---
export const REGISTER_REQUEST = 'REGISTER_REQUEST';     // Server ko request bheji ja rahi hai
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';     // Register safal raha, account ban gaya
export const REGISTER_FAILURE = 'REGISTER_FAILURE';     // Register fail ho gaya (jaise email pehle se exist hai)

// --- USER LOGIN (Purane Account Me Enter Hona) ---
export const LOGIN_REQUEST = 'LOGIN_REQUEST';           // Login credentials check ho rahe hain
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';           // Login safal raha, token mil gaya
export const LOGIN_FAILURE = 'LOGIN_FAILURE';           // Login fail ho gaya (jaise galat password)

// --- GET USER PROFILE (Login User Ki Detail Nikalna) ---
export const GET_USER_REQUEST = "GET_USER_REQUEST";     // Token se user ki detail mangi ja rahi hai
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";     // Detail mil gayi (jaise user ka naam, email)
export const GET_USER_FAILURE = "GET_USER_FAILURE";     // Detail nahi mili (jaise token expire ho gaya)

// --- GET ALL CUSTOMERS (Admin Ke Liye Saare Users Ki List) ---
export const GET_ALL_CUSTOMERS_REQUEST = "GET_ALL_CUSTOMERS_REQUEST"; // Admin saare customers ki list mang raha hai
export const GET_ALL_CUSTOMERS_SUCCESS = "GET_ALL_CUSTOMERS_SUCCESS"; // Saare customers ki list mil gayi
export const GET_ALL_CUSTOMERS_FAILURE = "GET_ALL_CUSTOMERS_FAILURE"; // List lane me koi error aa gaya

// --- USER LOGOUT (Session Khatam Karna) ---
export const LOGOUT = "LOGOUT";                         // Account logout karne aur token hatane ke liye
