import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
  GET_ALL_CUSTOMERS_REQUEST, // <-- Yeh import zaroori tha loading ke liye
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILURE, // <-- Yeh import zaroori tha error handle karne ke liye
} from "./ActionTypes";

// Shuruat me state (memory) kaisi dikhegi
const initialState = {
  user: null,
  isLoading: false,
  error: null,
  customers: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // 1. Saari Requests (Jab kaam chal raha ho)
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_ALL_CUSTOMERS_REQUEST: // <-- Admin list mang raha hai, loading shuru
      return { ...state, isLoading: true, error: null };

    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null, fetchingUser: true };

    // 2. Register Safal Hua
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false };

    // 3. Login Safal Hua (Yahan user ka data save karna zaroori tha)
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload }; // <-- Payload jod diya taaki data save ho sake

    // 4. User Profile Aur Admin List Mil Gayi
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        fetchingUser: false,
      };

    case GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customers: action.payload,
      };

    // 5. Saare Failures (Jab koi error aaye)
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_ALL_CUSTOMERS_FAILURE: // <-- Admin list lane me error aaya
      return { ...state, isLoading: false, error: action.payload };

    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        fetchingUser: false,
      };

    // 6. Logout (Saara data saaf karo)
    case LOGOUT:
      localStorage.removeItem("jwt"); // Token browser se hatao
      return { ...initialState }; // Sab kuch wapas shuruat jaisa khali kar do
      
    default:
      return state;
  }
};

export default authReducer;
