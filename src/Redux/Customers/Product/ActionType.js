// --- 1. CATEGORY KE HISAB SE PRODUCTS DHOONDHNA (Customer Dashboard) ---
export const FIND_PRODUCTS_BY_CATEGORY_REQUEST = 'FIND_PRODUCTS_BY_CATEGORY_REQUEST'; // Filters ke sath list mangi ja rahi hai
export const FIND_PRODUCTS_BY_CATEGORY_SUCCESS = 'FIND_PRODUCTS_BY_CATEGORY_SUCCESS'; // Products ki list mil gayi
export const FIND_PRODUCTS_BY_CATEGORY_FAILURE = 'FIND_PRODUCTS_BY_CATEGORY_FAILURE'; // List lane me koi error aa gaya

// --- 2. KISI EK SPECIFIC PRODUCT ID SE DETAIL NIKALNA (Product Details Page) ---
export const FIND_PRODUCT_BY_ID_REQUEST = 'FIND_PRODUCT_BY_ID_REQUEST';               // Product id se detail dhoondhi ja rahi hai
export const FIND_PRODUCT_BY_ID_SUCCESS = 'FIND_PRODUCT_BY_ID_SUCCESS';               // Product ki poori detail mil gayi
export const FIND_PRODUCT_BY_ID_FAILURE = 'FIND_PRODUCT_BY_ID_FAILURE';               // Detail nahi mili (jaise wrong product id)

// --- 3. NAYA PRODUCT JODNA (Admin Feature) ---
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';                       // Admin naya product add kar raha hai
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';                       // Naya product successfully shop me add ho gaya
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';                       // Product add karne me error aaya

// --- 4. PRODUCT KI DETAILS UPDATE KARNA (Admin Feature) ---
export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";                       // Product ki price ya detail badli ja rahi hai
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";                       // Details successfully update ho gayi
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";                       // Update karne me koi galti ho gayi

// --- 5. SEARCH BAR ME KEYWORD SE PRODUCT DHOONDHNA (Customer Search) ---
export const SEARCH_PRODUCT_REQUEST = "SEARCH_PRODUCT_REQUEST";                       // Search bar ke input se data dhoondha ja raha hai
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";                       // Match hone wale products mil gaye
export const SEARCH_PRODUCT_FAILURE = "SEARCH_PRODUCT_FAILURE";                       // Search karne me koi network error aaya

// --- 6. PRODUCT KO HATA DENA (Admin Feature) ---
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";                       // Admin product ko delete kar raha hai
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";                       // Product shop se permanently delete ho gaya
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";                       // Delete karne me error aaya
