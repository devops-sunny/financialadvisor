import { addProductData, deleteProductData, fetchProductsData, updateProductData } from '../../services/ProductService';
import {
  addProductSuccess,
  deleteProductSuccess,
  fetchProductError,
  fetchProductSuccess,
  operationError,
  setLoading,
  updateProductSuccess,
} from "./Products"

export const fetchProducts = () => (dispatch) => {
  dispatch(setLoading());
  fetchProductsData()
    .then((res) => {
      dispatch(fetchProductSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchProductError(error.message));
    });
};

export const addProduct = (data) => (dispatch) => {
  dispatch(setLoading());
  addProductData(data)
    .then((res) => {
      dispatch(addProductSuccess(res.data));
      dispatch(fetchProducts());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const updateProduct = (id, data) => (dispatch) => {
  dispatch(setLoading());
  updateProductData(id, data)
    .then((res) => {
      dispatch(updateProductSuccess(res.data));
      dispatch(fetchProducts());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch(setLoading());
  deleteProductData(id)
    .then(() => {
      dispatch(deleteProductSuccess(id));
      dispatch(fetchProducts());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};
