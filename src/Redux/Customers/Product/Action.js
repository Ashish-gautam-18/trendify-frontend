// import axios from "axios";

// import {
//   FIND_PRODUCTS_BY_CATEGORY_REQUEST,
//   FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
//   FIND_PRODUCTS_BY_CATEGORY_FAILURE,
//   FIND_PRODUCT_BY_ID_REQUEST,
//   FIND_PRODUCT_BY_ID_SUCCESS,
//   FIND_PRODUCT_BY_ID_FAILURE,
//   CREATE_PRODUCT_REQUEST,
//   CREATE_PRODUCT_SUCCESS,
//   CREATE_PRODUCT_FAILURE,
//   UPDATE_PRODUCT_REQUEST,
//   UPDATE_PRODUCT_SUCCESS,
//   UPDATE_PRODUCT_FAILURE,
//   DELETE_PRODUCT_REQUEST,
//   DELETE_PRODUCT_SUCCESS,
//   DELETE_PRODUCT_FAILURE,
//   SEARCH_PRODUCT_REQUEST,
//   SEARCH_PRODUCT_SUCCESS,
//   SEARCH_PRODUCT_FAILURE,
// } from "./ActionType";
// import api from "../../../config/api"; 

// // 1. FILTER KE SATH PRODUCTS DHOONDHNA (Customer Jab Category, Color, Ya Price Chunta Hai)
// export const findProducts = (reqData) => async (dispatch) => {
//   const {
//     colors,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     category,
//     stock,
//     sort,
//     pageNumber,
//     pageSize,
//   } = reqData;

//   try {
//     dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST }); // Loading shuru

//     // Saare filters ko URL me jodkar backend se data mangna
//     const { data } = await api.get(
//       `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
//     );

//     console.log("get product by category - ", data);
//     dispatch({
//       type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
//       payload: data, // Products ka data Reducer ko bheja
//     });
//   } catch (error) {
//     dispatch({
//       type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// // 2. KISI EK PRODUCT KI FULL DETAIL NIKALNA (Customer Jab Photo Par Click Karta Hai)
// export const findProductById = (reqData) => async (dispatch) => {
//   try {
//     dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST }); // Loading shuru

//     // Product ki ID lekar backend se uski poori detail mangna
//     const { data } = await api.get(`/api/products/id/${reqData.productId}`);

//     console.log("products by id : ", data);
//     dispatch({
//       type: FIND_PRODUCT_BY_ID_SUCCESS,
//       payload: data, // Single product ka data Reducer ko bheja
//     });
//   } catch (error) {
//     dispatch({
//       type: FIND_PRODUCT_BY_ID_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// // 3. SEARCH BAR SE PRODUCT DHOONDHNA (Customer Jab Name Type Karta Hai)
// export const searchProduct = (keyword) => async (dispatch) => {
//   try {
//     dispatch({ type: SEARCH_PRODUCT_REQUEST }); // Loading shuru

//     // Search keyword ko query parameter me bhej kar data mangna
//     const { data } = await api.get(`/api/products/search`, {
//       params: {
//         q: keyword
//       }
//     });

//     console.log("products by id : ", data);
//     dispatch({
//       type: SEARCH_PRODUCT_SUCCESS,
//       payload: data, // Saare matching products Reducer ko bheje
//     });
//   } catch (error) {
//     dispatch({
//       type: SEARCH_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// // 4. NAYA PRODUCT JODNA (Admin Jab New Item Dukaan Me Add Karta Hai)
// export const createProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: CREATE_PRODUCT_REQUEST }); // Loading shuru

//     // Naye product ka data admin route par post karna
//     const { data } = await api.post(
//       `/api/admin/products/`,
//       product.data
//     );

//     dispatch({
//       type: CREATE_PRODUCT_SUCCESS,
//       payload: data, // Banaya hua product Reducer ko bheja
//     });

//     console.log("created product ", data);
//   } catch (error) {
//     dispatch({
//       type: CREATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// // 5. PRODUCT KI DETAIL BADALNA (Admin Jab Price Ya Stock Update Karta Hai)
// export const updateProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PRODUCT_REQUEST }); // Loading shuru

//     // Product ID aur naya data lekar server par update karna
//     const { data } = await api.put(
//       `/api/admin/products/${product.productId}`,
//       product
//     );

//     dispatch({
//       type: UPDATE_PRODUCT_SUCCESS,
//       payload: data, // Badla hua product Reducer ko bheja
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// // 6. PRODUCT KO DUKAAN SE HATANA (Admin Jab Kisi Item Ko Delete Karta Hai)
// export const deleteProduct = (productId) => async (dispatch) => {
//   console.log("delete product action", productId)
//   try {
//     dispatch({ type: DELETE_PRODUCT_REQUEST }); // Loading shuru

//     // Product ID lekar server ko use delete karne ka request bhejna
//     let { data } = await api.delete(`/api/admin/products/${productId}/delete`);

//     dispatch({
//       type: DELETE_PRODUCT_SUCCESS,
//       payload: data, // Delete ki confirmation Reducer ko bheji
//     });

//     console.log("product delete ", data)
//   } catch (error) {
//     console.log("catch error ", error)
//     dispatch({
//       type: DELETE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };









import axios from "axios";

import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from "./ActionType";
import api from "../../../config/api"; 

// 1. FILTER KE SATH PRODUCTS DHOONDHNA (Customer Jab Category, Color, Ya Price Chunta Hai)
export const findProducts = (reqData) => async (dispatch) => {
  // FIX: Fallback object `{}` add kiya taaki reqData undefined hone par bhi code crash na ho
  const {
    colors = "",
    sizes = "",
    minPrice = 0,
    maxPrice = 10000,
    minDiscount = 0,
    category = "",
    stock = "",
    sort = "",
    pageNumber = 1,
    pageSize = 10,
  } = reqData || {};

  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST }); // Loading shuru

    // Saare filters ko URL me jodkar backend se data mangna
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("get product by category - ", data);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data, // Products ka data Reducer ko bheja
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// 2. KISI EK PRODUCT KI FULL DETAIL NIKALNA (Customer Jab Photo Par Click Karta Hai)
export const findProductById = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST }); // Loading shuru

    // Product ki ID lekar backend se uski poori detail mangna
    const { data } = await api.get(`/api/products/id/${reqData?.productId}`);

    console.log("products by id : ", data);
    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data, // Single product ka data Reducer ko bheja
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// 3. SEARCH BAR SE PRODUCT DHOONDHNA (Customer Jab Name Type Karta Hai)
export const searchProduct = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_PRODUCT_REQUEST }); // Loading shuru

    // Search keyword ko query parameter me bhej kar data mangna
    const { data } = await api.get(`/api/products/search`, {
      params: {
        q: keyword
      }
    });

    console.log("products by search : ", data);
    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: data, // Saare matching products Reducer ko bheje
    });
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// 4. NAYA PRODUCT JODNA (Admin Jab New Item Dukaan Me Add Karta Hai)
export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST }); // Loading shuru

    // Naye product ka data admin route par post karna
    const { data } = await api.post(
      `/api/admin/products/`,
      product?.data
    );

    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data, // Banaya hua product Reducer ko bheja
    });

    console.log("created product ", data);
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// 5. PRODUCT KI DETAIL BADALNA (Admin Jab Price Ya Stock Update Karta Hai)
export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST }); // Loading shuru

    // Product ID aur naya data lekar server par update karna
    const { data } = await api.put(
      `/api/admin/products/${product?.productId}`,
      product
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data, // Badla hua product Reducer ko bheja
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// 6. PRODUCT KO DUKAAN SE HATANA (Admin Jab Kisi Item Ko Delete Karta Hai)
export const deleteProduct = (productId) => async (dispatch) => {
  console.log("delete product action", productId)
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST }); // Loading shuru

    // Product ID lekar server ko use delete karne ka request bhejna
    let { data } = await api.delete(`/api/admin/products/${productId}/delete`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data, // Delete ki confirmation Reducer ko bheji
    });

    console.log("product delete ", data)
  } catch (error) {
    console.log("catch error ", error)
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
