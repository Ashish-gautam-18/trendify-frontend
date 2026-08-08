import { 
  CREATE_PAYMENT_FAILURE, 
  CREATE_PAYMENT_REQUEST, 
  CREATE_PAYMENT_SUCCESS, 
  UPDATE_PAYMENT_FAILURE, 
  UPDATE_PAYMENT_REQUEST, 
  UPDATE_PAYMENT_SUCCESS 
} from "./ActionType";

// Shuruat me transaction data khali rahega
const initialState = {
  loading: false,       // Spinner chalane ke liye
  success: false,       // Payment link banana safal hua ya nahi
  paymentResult: null,  // Gateway se mila link aur result save karne ke liye
  payment: null,        // Final transaction status (PAID/FAILED) ke liye
  error: null,          // Error message ke liye
};

// Payment reducer jo transactional data handle karta hai
export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // --- 1. REQUEST CASES (Kaam chalne par loading true karo aur purana data safe rakho) ---
    case CREATE_PAYMENT_REQUEST:
    case UPDATE_PAYMENT_REQUEST:
      return {
        ...state,       // Sahi Fix: Purani memory ko safe rakha
        loading: true,
        error: null,    // Naya kaam shuru hote hi purana error saaf kiya
      };

    // --- 2. SUCCESS CASES (Kaam safal hone par payload data save karo) ---
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,       // Purani memory safe
        loading: false,
        success: true,
        paymentResult: action.payload, // Secure payment link ka data save kiya
      };
      
    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,       // Purani memory safe
        loading: false,
        payment: action.payload, // Final order transaction status ("PAID") save kiya
        error: null,
      };

    // --- 3. FAILURE CASES (Error aane par loading band karo aur error text save karo) ---
    case CREATE_PAYMENT_FAILURE:
      return {
        ...state,       // Purani memory safe
        loading: false,
        success: false,
        error: action.payload,
      };

    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,       // Purani memory safe
        loading: false,
        payment: null,  // Payment fail hone par use khali kar diya
        error: action.payload, // Jo galti hui use save kiya
      };

    default:
      return state;
  }
};

export default paymentReducer;
