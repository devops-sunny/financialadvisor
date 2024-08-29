import { addSubCategoryData, deleteSubCategoryData, fetchSubCategoriesData, updateSubCategoryData } from '../../services/SubCategoryService';
import {
  fetchSubCategoriesSuccess,
  fetchSubCategoriesError,
  setLoading,
  addSubCategorySuccess,
  updateSubCategorySuccess,
  deleteSubCategorySuccess,
  operationError,
} from './SubCategory';

export const fetchSubCategories = () => (dispatch) => {
  dispatch(setLoading());
  fetchSubCategoriesData()
    .then((res) => {
      dispatch(fetchSubCategoriesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchSubCategoriesError(error.message));
    });
};

export const addSubCategory = (data) => (dispatch) => {
  dispatch(setLoading());
  addSubCategoryData(data)
    .then((res) => {
      dispatch(addSubCategorySuccess(res.data));
      dispatch(fetchSubCategories());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const updateSubCategory = (id, data) => (dispatch) => {
  dispatch(setLoading());
  updateSubCategoryData(id ,data)
    .then((res) => {
      dispatch(updateSubCategorySuccess(res.data));
      dispatch(fetchSubCategories());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const deleteSubCategory = (id) => (dispatch) => {
  dispatch(setLoading());
  deleteSubCategoryData(id)
    .then(() => {
      dispatch(deleteSubCategorySuccess(id));
      dispatch(fetchSubCategories());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};


