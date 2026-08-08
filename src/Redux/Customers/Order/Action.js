import axios from "axios";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
} from "./ActionType";
import api, { API_BASE_URL } from "../../../config/api";

// --- 1. NEW ORDER CREATE KARNA (Checkout Address Page) ---
export const createOrder = (reqData) => async (dispatch) => {
  console.log("req data ", reqData);
  try {
    dispatch({ type: CREATE_ORDER_REQUEST }); // Loading shuru

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${reqData.jwt}`, // Token pass kiya security ke liye
      },
    };

    // Backend me naya order create karne ke liye address bhej rahe hain
    const { data } = await axios.post(
      `${API_BASE_URL}/api/orders/`,
      reqData.address,
      config
    );
    
    // Agar order successfully ban gaya, to automatic step=3 (payment page) par bhej do
    if (data.id) {
      reqData.navigate({ search: `step=3&order_id=${data.id}` });
    }
    
    console.log("created order - ", data);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data, // Order ka data Reducer ko bheja
    });
  } catch (error) {
    console.log("catch error : ", error);
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// --- 2. ORDER ID SE SINGLE ORDER SUMMARY NIKALNA ---
export const getOrderById = (orderId) => async (dispatch) => {
  console.log("get order req ", orderId);
  try {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST }); // Loading shuru

    // Custom api instance ka use karke order details mangna
    const { data } = await api.get(`/api/orders/${orderId}`);
    
    console.log("order by id ", data);
    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data, // Single order data Reducer ko bheja
    });
  } catch (error) {
    console.log("catch ", error)
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// --- 3. LOGIN USER KI PURANI ORDER HISTORY NIKALNA ("My Orders" Page) ---
export const getOrderHistory = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_HISTORY_REQUEST }); // Loading shuru

    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`, // Token configuration taiyar ki
      },
    };

    // Sahi Fix: Request me config ko pass kiya taaki backend token verify kar sake
    const { data } = await api.get(`/api/orders/user`, config); 
    
    console.log("order history -------- ", data);
    dispatch({
      type: GET_ORDER_HISTORY_SUCCESS,
      payload: data, // Saare purane orders Reducer ko bheje
    });
  } catch (error) {
    dispatch({
      type: GET_ORDER_HISTORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
