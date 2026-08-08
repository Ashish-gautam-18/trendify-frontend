// --- 1. USER REVIEW OPERATIONS (Text Feedback/Comments) ---
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';   // Naya text comment successfully save ho gaya
export const CREATE_REVIEW_FAILURE = 'CREATE_REVIEW_FAILURE';   // Review post karne me koi network ya server error aaya
export const GET_ALL_REVIEWS_SUCCESS = 'GET_ALL_REVIEWS_SUCCESS'; // Product ke saare puraane reviews successfully mil gaye
export const GET_ALL_REVIEWS_FAILURE = 'GET_ALL_REVIEWS_FAILURE'; // Saare reviews ki list lane me error aaya

// --- 2. USER RATING OPERATIONS (Star Ratings 1 to 5) ---
export const CREATE_RATING_SUCCESS = 'CREATE_RATING_SUCCESS';   // Stars rating successfully save ho gayi
export const CREATE_RATING_FAILURE = 'CREATE_RATING_FAILURE';   // Stars upload karne me koi error aaya
export const GET_ALL_RATINGS_SUCCESS = 'GET_ALL_RATINGS_SUCCESS'; // Product ke saari star ratings successfully mil gayi
export const GET_ALL_RATINGS_FAILURE = 'GET_ALL_RATINGS_FAILURE'; // Saari ratings fetch karne me network error aaya
