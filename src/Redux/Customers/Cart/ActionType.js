// --- 1. CART ME NAYA ITEM ADD KARNA (Add To Cart Button) ---
export const ADD_ITEM_TO_CART_REQUEST = 'ADD_ITEM_TO_CART_REQUEST'; // Item add karne ki request bheji ja rahi hai
export const ADD_ITEM_TO_CART_SUCCESS = 'ADD_ITEM_TO_CART_SUCCESS'; // Item cart me successfully add ho gaya
export const ADD_ITEM_TO_CART_FAILURE = 'ADD_ITEM_TO_CART_FAILURE'; // Item add karne me koi error aa gaya

// --- 2. USER KA POORA CART DATA NIKALNA (Cart Page Open Hona) ---
export const GET_CART_REQUEST = 'GET_CART_REQUEST';                 // Server se user ka cart mangaya ja raha hai
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';                 // Cart ka saara data successfully mil gaya
export const GET_CART_FAILURE = 'GET_CART_FAILURE';                 // Cart data lane me koi error aa gaya

// --- 3. CART SE KISI ITEM KO HATANA (Remove Button) ---
export const REMOVE_CART_ITEM_REQUEST = 'REMOVE_CART_ITEM_REQUEST'; // Item hatane ki request bheji ja rahi hai
export const REMOVE_CART_ITEM_SUCCESS = 'REMOVE_CART_ITEM_SUCCESS'; // Item cart se successfully delete ho gaya
export const REMOVE_CART_ITEM_FAILURE = 'REMOVE_CART_ITEM_FAILURE'; // Item hatane me koi error aa gaya

// --- 4. ITEM KI QUANTITY UPDATING (Quantity Change Button +/-) ---
export const UPDATE_CART_ITEM_REQUEST = 'UPDATE_CART_ITEM_REQUEST'; // Item ki quantity update ki ja rahi hai
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS'; // Quantity successfully update ho gayi
export const UPDATE_CART_ITEM_FAILURE = 'UPDATE_CART_ITEM_FAILURE'; // Quantity update karne me error aaya
