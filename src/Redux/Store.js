import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// Fixed Redux Thunk v3+ named import setup format
// import { thunk } from "redux-thunk"; 
import thunk from "redux-thunk"; 
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "./Admin/Product/Reducer";
import cartReducer from "./Customers/Cart/Reducer";
import { orderReducer } from "./Customers/Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer";
import ReviewReducer from "./Customers/Review/Reducer";

// Combined execution framework mapping root architecture
const rootReducers = combineReducers({
  auth: authReducer,
  customersProduct: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
  review: ReviewReducer,

  // Admin access layers management
  adminsProduct: productReducer,
  adminsOrder: adminOrderReducer,
});

// Create global ecosystem state data store engine smoothly
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

