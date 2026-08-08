// --- 1. NEW TRANSACTION LINK GENERATION (Checkout Pay Button) ---
export const CREATE_PAYMENT_REQUEST = "CREATE_PAYMENT_REQUEST"; // Razorpay/Gateway link generate ho raha hai
export const CREATE_PAYMENT_SUCCESS = "CREATE_PAYMENT_SUCCESS"; // Secure payment link successfully mil gaya
export const CREATE_PAYMENT_FAILURE = 'CREATE_PAYMENT_FAILURE'; // Payment link generate karne me network error aaya

// --- 2. PAYMENT HO JANE KE BAAD STATUS REDIRECTION CHECKING (Payment Success Page) ---
export const UPDATE_PAYMENT_REQUEST = "UPDATE_PAYMENT_REQUEST"; // Gateway status aur order status crosscheck ho raha hai
export const UPDATE_PAYMENT_SUCCESS = "UPDATE_PAYMENT_SUCCESS"; // Payment success ho gayi aur order "PAID" mark ho gaya
export const UPDATE_PAYMENT_FAILURE = "UPDATE_PAYMENT_FAILURE"; // Gateway status update failure (jaise transaction decline)
