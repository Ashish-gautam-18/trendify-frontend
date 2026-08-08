import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_SUCCESS,
} from "./ActionType";

// Shuruat me product ka data khali rahega
const initialState = {
  products: [],          // Saare products ki list ke liye
  product: null,         // Kisi ek product ki poori detail ke liye
  loading: false,        // Spinner ghumane ke liye
  error: null,           // Error save karne ke liye
  deleteProduct: null,   // Delete kiye hue product ki detail ke liye
  searchProducts: []     // Search karne par aaye products ke liye
};

const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // --- 1. CATEGORY KE PRODUCTS FETCH KARNA ---
    case FIND_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, loading: true, error: null, products: [] };
    case FIND_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FIND_PRODUCTS_BY_CATEGORY_FAILURE:
      return { ...state, loading: false, products: [], error: action.payload };

    // --- 2. SINGLE PRODUCT DETAIL FETCH KARNA ---
    case FIND_PRODUCT_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, product: action.payload, loading: false };
    case FIND_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // --- 3. NAYA PRODUCT CREATE KARNA (Admin) ---
    case CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        // Naye product ko purani list me peeche jod dena sabse safe tareeka hai
        products: [...state.products, action.payload], 
      };
    case CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // --- 4. SEARCH BAR SE PRODUCTS LANA ---
    case SEARCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, searchProducts: action.payload };

    // --- 5. PRODUCT KI DETAIL UPDATE KARNA (Admin) ---
    case UPDATE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        // Puri list me se match hone wale product id ko naye data se badal dena
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case UPDATE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // --- 6. PRODUCT KO DELETE KARNA (Admin) ---
    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_PRODUCT_SUCCESS:
      console.log("delete ", state.products);
      return {
        ...state,
        loading: false,
        deleteProduct: action.payload,
        // Sahi Fix: Delete hote hi screen se us product ko turant chhipane ke liye list se nikal dena
        products: state.products.filter((product) => product.id !== action.payload)
      };
    case DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default customerProductReducer;





