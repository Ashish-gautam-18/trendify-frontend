import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "./ActionType";
import api, { API_BASE_URL } from "../../../config/api";

// 1. FETCH ALL PRODUCTS FOR ADMIN GRID
export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const response = await api.get(`/api/admin/products/`);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: errorMsg });
  }
};

// 2. CREATE NEW PRODUCT ENTRY
export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const response = await api.post(`/api/admin/products/`, productData.data);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: errorMsg });
  }
};

// 3. UPDATE EXISTING PRODUCT DETAILS
export const updateProduct = (productId, productData) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const response = await api.put(`/api/admin/products/${productId}`, productData);
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: errorMsg });
  }
};

// 4. PERMANENTLY DELETE PRODUCT FROM DATABASE
export const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    await api.delete(`/api/admin/products/${productId}/delete`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: errorMsg });
  }
};


