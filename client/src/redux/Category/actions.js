import { addCategoryData, deleteCategoryData, fetchCategoriesData, updateCategoryData } from '../../services/CategoryService';
import {
  addCategorySuccess,
  deleteCategorySuccess,
  fetchCategoriesError,
  fetchCategoriesSuccess,
  operationError,
  setLoading,
  updateCategorySuccess,
} from './Category';

export const fetchCategories = () => (dispatch) => {
  dispatch(setLoading());
  fetchCategoriesData()
    .then((res) => {
      dispatch(fetchCategoriesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCategoriesError(error.message));
    });
};

export const addCategory = (data) => (dispatch) => {
  dispatch(setLoading());
  addCategoryData(data)
    .then((res) => {
      dispatch(addCategorySuccess(res.data));
      dispatch(fetchCategories());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const updateCategory = (id, data) => (dispatch) => {
  dispatch(setLoading());
  updateCategoryData(id ,data)
    .then((res) => {
      dispatch(updateCategorySuccess(res.data));
      dispatch(fetchCategories());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const deleteCategory = (id) => (dispatch) => {
  dispatch(setLoading());
  console.log(id)
  deleteCategoryData(id)
    .then(() => {
      dispatch(deleteCategorySuccess(id));
      dispatch(fetchCategories());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};


