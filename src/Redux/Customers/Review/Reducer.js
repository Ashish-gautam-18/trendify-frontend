// reducer.js
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

// Shuruat me reviews aur ratings ki list khali rahegi
const initialState = {
  reviews: [], // Saare text comments/reviews save karne ke liye
  ratings: [], // Saare star ratings save karne ke liye
  error: ''    // Error message bacha kar rakhne ke liye
};

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // --- 1. USER TEXT REVIEWS CASES ---
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        // Naye review comment ko purani list ke peeche jod diya
        reviews: [...state.reviews, action.payload], 
        error: ''
      };
    case CREATE_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload, // Saare purane reviews ko list me load kiya
        error: ''
      };
    case GET_ALL_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    // --- 2. USER STAR RATINGS CASES ---
    case CREATE_RATING_SUCCESS:
      return {
        ...state,
        // Nayi star rating ko purani ratings list ke peeche jod diya
        ratings: [...state.ratings, action.payload],
        error: ''
      };
    case CREATE_RATING_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GET_ALL_RATINGS_SUCCESS:
      return {
        ...state,
        ratings: action.payload, // Saari purani star ratings ko load kiya
        error: ''
      };
    case GET_ALL_RATINGS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default ReviewReducer;
