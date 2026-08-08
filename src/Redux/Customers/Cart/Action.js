import axios from "axios";

import { API_BASE_URL } from "../../../config/api";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
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

// --- 1. CART ME NAYA ITEM ADD KARNA ---
export const addItemToCart = (reqData) => async (dispatch) => {
  console.log("req data ", reqData)
  try {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST }); // Loading shuru
    
    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`, // Security ke liye token bhej rahe hain
        "Content-Type": "application/json",
      },
    };
    
    // Backend me product add karne ki request bheji
    const { data } = await axios.put(`${API_BASE_URL}/api/cart/add`, 
      reqData.data,
      config,
    );
    
    console.log("add item to cart ", data)
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: data, // Naya cart data Reducer ko bheja
    });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// --- 2. LOGIN USER KA POORA CART DATA LIKALNA ---
export const getCart = (jwt) => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST }); // Loading shuru
    
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json"
      },
    };
    
    // Server se is user ka active cart data mangna
    const { data } = await axios.get(`${API_BASE_URL}/api/cart/`, config);
    
    console.log("cart ", data)
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data, // Pura cart object Reducer ko bheja
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// --- 3. CART SE KISI ITEM KO DELETE KARNA ---
export const removeCartItem = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST }); // Loading shuru
    
    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
        "Content-Type": "application/json"
      },
    };
    
    // Item ki unique ID se use cart se permanently hatana
    await axios.delete(`${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`, config);

    dispatch({
      type: REMOVE_CART_ITEM_SUCCESS,
      payload: reqData.cartItemId, // Hataye gaye item ki ID Reducer ko bheji taaki screen se hat sake
    });
  } catch (error) {
    dispatch({
      type: REMOVE_CART_ITEM_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// --- 4. ITEM KI QUANTITY BADHANA YA GHATANA (Jaise 1 item se 2 karna) ---
export const updateCartItem = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST }); // Loading shuru
    
    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
        "Content-Type": "application/json"
      },
    };
    
    // Cart item id aur naya quantity data backend ko bhejna
    const { data } = await axios.put(
      `${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,
      reqData.data, config
    );
    
    console.log("udated cartitem ", data)
    dispatch({
      type: UPDATE_CART_ITEM_SUCCESS,
      payload: data, // Updated item detail Reducer ko bheji
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
