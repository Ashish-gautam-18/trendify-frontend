// --- 1. NAYA ORDER CREATE KARNA (Checkout Step) ---
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'; // Address choose karne ke baad order table ban raha hai
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'; // Order successfully ban gaya aur ID mil gayi
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE'; // Order banane me koi network ya server error aaya

// --- 2. ORDER ID SE ORDER SUMMARY NIKALNA (Order Confirmation/Details Page) ---
export const GET_ORDER_BY_ID_REQUEST = 'GET_ORDER_BY_ID_REQUEST'; // Kisi ek specific order ki detail mangi ja rahi hai
export const GET_ORDER_BY_ID_SUCCESS = 'GET_ORDER_BY_ID_SUCCESS'; // Us order ka saara data (items, price, status) mil gaya
export const GET_ORDER_BY_ID_FAILURE = 'GET_ORDER_BY_ID_FAILURE'; // Order detail lane me koi galti ho gayi

// --- 3. LOGIN USER KI PURANI HISTORY NIKALNA ("My Orders" Page) ---
export const GET_ORDER_HISTORY_REQUEST = 'GET_ORDER_HISTORY_REQUEST'; // User ke purane saare orders ki list mangi ja rahi hai
export const GET_ORDER_HISTORY_SUCCESS = 'GET_ORDER_HISTORY_SUCCESS'; // Saare purane orders ki list successfully mil gayi
export const GET_ORDER_HISTORY_FAILURE = 'GET_ORDER_HISTORY_FAILURE'; // History data lane me koi error aa gaya
