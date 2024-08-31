import { addPrivacyData, deletePrivacyData, fetchPrivacyData, updatePrivacyData } from '../../services/PrivacyService';
import {
  addPrivacySuccess,
  deletePrivacySuccess,
  fetchPrivacyError,
  fetchPrivacySuccess,
  operationError,
  setLoading,
  updatePrivacySuccess,
} from './Privacy';

export const fetchPrivacyPolicies = () => (dispatch) => {
  dispatch(setLoading());
  fetchPrivacyData()
    .then((res) => {
      dispatch(fetchPrivacySuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchPrivacyError(error.message));
    });
};

export const addPrivacyPolicy = (data) => (dispatch) => {
  dispatch(setLoading());
  addPrivacyData(data)
    .then((res) => {
      dispatch(addPrivacySuccess(res.data));
      dispatch(fetchPrivacyPolicies());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const updatePrivacyPolicy = (id, data) => (dispatch) => {
  dispatch(setLoading());
  updatePrivacyData(id, data)
    .then((res) => {
      dispatch(updatePrivacySuccess(res.data));
      dispatch(fetchPrivacyPolicies());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const deletePrivacyPolicy = (id) => (dispatch) => {
  dispatch(setLoading());
  deletePrivacyData(id)
    .then(() => {
      dispatch(deletePrivacySuccess(id));
      dispatch(fetchPrivacyPolicies());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};
