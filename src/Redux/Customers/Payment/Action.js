import { API_BASE_URL } from '../../../config/api';
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from './ActionType';

import axios from 'axios';

// --- 1. PAYMENT LINK GENERATE KARNA (Pay Button Dabane Par) ---
export const createPayment = (reqData) => async (dispatch) => {
  console.log("create payment reqData ", reqData)
  try {
    dispatch({ type: CREATE_PAYMENT_REQUEST }); // Loading shuru

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${reqData.jwt}`, // Token pass kiya security ke liye
      },
    };

    // Backend ko orderId path me bhej rahe hain, body khali bhej sakte hain ya selected payment method
    const { data } = await axios.post(`${API_BASE_URL}/api/payments/${reqData.orderId}`, {}, config);
    console.log("datta", data)
    
    // Agar backend se transaction link mil gaya, to user ko bank/payment gateway page par bhej do
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    
    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// --- 2. PAYMENT HO JANE KE BAAD STATUS CONFIRM KARNA (Redirect Success Page) ---
export const updatePayment = (reqData) => async (dispatch) => {
  console.log("update payment reqData ", reqData)
  try {
    dispatch({ type: UPDATE_PAYMENT_REQUEST }); // Loading shuru
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${reqData.jwt}`,
      },
    };
    
    // Bank se mili paymentId aur hamari orderId bhejkar backend me status check karna
    const { data } = await axios.get(`${API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`, config);
    console.log("updated data", data)
    
    dispatch({
      type: UPDATE_PAYMENT_SUCCESS,
      payload: data, // Final transaction status Reducer ko bheja
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PAYMENT_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
