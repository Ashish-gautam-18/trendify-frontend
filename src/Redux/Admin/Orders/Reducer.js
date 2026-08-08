import {
  CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS,
  GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,
  SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  orders: [],
  error: "",
};

const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    // Standard centralized tracking state request block
    case GET_ORDERS_REQUEST:
    case CONFIRMED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCELED_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
    case SHIP_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    // Load fresh items array into data ecosystem
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: "",
      };

    // Update real-time objects status within existing array memory maps
    case CONFIRMED_ORDER_SUCCESS:
    case DELIVERED_ORDER_SUCCESS:
    case CANCELED_ORDER_SUCCESS:
    case SHIP_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
      };

    // Splice array parameters smoothly upon delete execution trigger
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };

    // Dynamic centralized architecture failure tracking layout
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        orders: [],
        error: action.payload,
      };

    case CONFIRMED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case CANCELED_ORDER_FAILURE:
    case DELETE_ORDER_FAILURE:
    case SHIP_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default adminOrderReducer;


