import {
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAILURE,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  GET_ALL_RATINGS_SUCCESS,
  GET_ALL_RATINGS_FAILURE
} from './ActionType'; 
import api from '../../../config/api';

// --- 1. NEW REVIEW CREATE KARNA (Product Page Par Comment Likhna) ---
export const createReview = (resData) => {
  console.log("create review req ", resData)
  return async (dispatch) => {
    try {
      // Backend me review text data post karna
      const response = await api.post('/api/reviews/create', resData);

      dispatch({
        type: CREATE_REVIEW_SUCCESS,
        payload: response.data // Naya review data Reducer ko bheja
      });
      console.log("create review ", response.data)
    } catch (error) {
      dispatch({
        type: CREATE_REVIEW_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      });
    }
  };
};

// --- 2. PRODUCT ID SE SAARE CUSTOMERS KE REVIEWS NIKALNA ---
export const getAllReviews = (productId) => {
  return async (dispatch) => {
    try {
      // Specific product ke saare comments/reviews fetch karna
      const response = await api.get(`/api/reviews/product/${productId}`);

      dispatch({
        type: GET_ALL_REVIEWS_SUCCESS,
        payload: response.data // Reviews ki list Reducer ko bheji
      });
      console.log("all review ", response.data)
    } catch (error) {
      dispatch({
        type: GET_ALL_REVIEWS_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      });
    }
  };
};

// --- 3. NEW RATING DE-NA (Product Page Par Stars Choose Karna) ---
export const createRating = (resData) => {
  return async (dispatch) => {
    try {
      // Backend me star rating data post karna
      const response = await api.post('/api/ratings/create', resData);

      dispatch({
        type: CREATE_RATING_SUCCESS,
        payload: response.data // Nayi rating detail Reducer ko bheji
      });
    } catch (error) {
      dispatch({
        type: CREATE_RATING_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      });
    }
  };
};

// --- 4. PRODUCT ID SE SAARE CUSTOMERS KI RATINGS NIKALNA ---
export const getAllRatings = (productId) => {
  return async (dispatch) => {
    try {
      // Specific product ki saari star ratings fetch karna
      const response = await api.get(`/api/ratings/product/${productId}`);

      dispatch({
        type: GET_ALL_RATINGS_SUCCESS,
        payload: response.data // Ratings ki list Reducer ko bheji
      });
      console.log("all rating ", response.data)
    } catch (error) {
      dispatch({
        type: GET_ALL_RATINGS_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      });
    }
  };
};
