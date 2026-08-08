import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
} from './ActionType';

// Shuruat me orders list aur single order khali rahenge
const initialState = {
  orders: [],       // Saare purane orders ki list ke liye
  order: null,      // Kisi ek order ki summary ke liye
  error: null,      // Error save karne ke liye
  loading: false,   // Spinner ghumane ke liye
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // --- 1. REQUEST CASES (Kaam shuru hone par purana data safe rakho) ---
    case CREATE_ORDER_REQUEST:
    case GET_ORDER_BY_ID_REQUEST:
    case GET_ORDER_HISTORY_REQUEST:
      return {
        ...state,       // Sahi Fix: Purani memory ko safe rakha
        loading: true,
        error: null,    // Naya kaam shuru hote hi purana error saaf kiya
      };

    // --- 2. SUCCESS CASES (Kaam safal hone par data save karo) ---
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,       // Purani memory safe
        loading: false,
        success: true,
        order: action.payload, // Naya banaya hua order save kiya
      };
      
    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,       // Purani memory safe
        loading: false,
        order: action.payload, // Single order detail save ki
      };
      
    case GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,       // Purani memory safe
        loading: false,
        orders: action.payload, // Saare purane orders list me save kiye
      };

    // --- 3. FAILURE CASES (Error aane par loading band karo aur error dikhao) ---
    case CREATE_ORDER_FAILURE:
    case GET_ORDER_BY_ID_FAILURE:
    case GET_ORDER_HISTORY_FAILURE:
      return {
        ...state,       // Purani memory safe
        loading: false,
        error: action.payload, // Jo galti hui use save kiya
      };

    default:
      return state;
  }
};

