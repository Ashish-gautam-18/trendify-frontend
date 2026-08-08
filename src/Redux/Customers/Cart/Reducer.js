import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

// Shuruat me cart khali rahega
const initialState = {
  cart: null,         // Poore cart ka data (total price, discounts etc.)
  loading: false,     // Loading spinner ke liye
  error: null,        // Error message save karne ke liye
  cartItems: [],      // Jhole me maujood saare items ki list (array)
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // --- 1. REQUEST CASES (Jab backend se kaam chal raha ho) ---
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
      
    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null };
      
    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null };

    // --- 2. SUCCESS CASES (Jab kaam successfully ho jaye) ---
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        // Sahi Fix: Agar single item hai to list me jodo, agar pura object hai to refresh karo
        cartItems: action.payload?.cartItems ? action.payload.cartItems : [...state.cartItems, action.payload],
        cart: action.payload?.cartItems ? action.payload : state.cart
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems || [], // Saare items list me daale
        cart: action.payload,                     // Poora cart object save kiya
        loading: false,
      };

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        // Match hone wali item id ko list se filter karke bahar nikal diya (Screen se gayab)
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        // Match hone wale item ki quantity ko naye data se badal diya
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    // --- 3. FAILURE CASES (Jab koi error aaye) ---
    case ADD_ITEM_TO_CART_FAILURE:
    case GET_CART_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
