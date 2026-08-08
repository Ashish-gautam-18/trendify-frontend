import api from "../../../config/api";
import {
  canceledOrderFailure,
  canceledOrderRequest,
  canceledOrderSuccess,
  confirmedOrderFailure,
  confirmedOrderRequest,
  confirmedOrderSuccess,
  deleteOrderFailure,
  deleteOrderRequest,
  deleteOrderSuccess,
  deliveredOrderFailure,
  deliveredOrderRequest,
  deliveredOrderSuccess,
  getOrdersFailure,
  getOrdersRequest,
  getOrdersSuccess,
  shipOrderFailure,
  shipOrderRequest,
  shipOrderSuccess,
} from "./ActionCreator";

// Fetch all available orders from customer database logs
export const getOrders = (reqData) => {
  return async (dispatch) => {
    dispatch(getOrdersRequest());
    try {
      const response = await api.get(`/api/admin/orders/`);
      dispatch(getOrdersSuccess(response.data));
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch(getOrdersFailure(errorMsg));
    }
  };
};

// Transition targeted entry to CONFIRMED matrix tracking state
export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch(confirmedOrderRequest());
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    dispatch(confirmedOrderSuccess(response.data));
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch(confirmedOrderFailure(errorMsg));
  }
};

// Transition targeted entry to SHIPPED operational distribution grid
export const shipOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(shipOrderRequest());
    try {
      const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
      dispatch(shipOrderSuccess(data));
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch(shipOrderFailure(errorMsg));
    }
  };
};

// Mark inventory package record lifecycle tracking state as DELIVERED
export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch(deliveredOrderRequest());
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
    dispatch(deliveredOrderSuccess(response.data));
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch(deliveredOrderFailure(errorMsg));
  }
};

// Issue standard operational cancellation update to cancel order
export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch(canceledOrderRequest());
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
    dispatch(canceledOrderSuccess(response.data));
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    dispatch(canceledOrderFailure(errorMsg));
  }
};

// Permanent analytical purge removal action script pipeline
export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    dispatch(deleteOrderRequest());     
    try {
      await api.delete(`/api/admin/orders/${orderId}/delete`);
      // Passing structured layout parameters smoothly
      dispatch(deleteOrderSuccess(orderId));
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch(deleteOrderFailure(errorMsg));
    }
  };
};
