import { fetchUsersData, addUserData, updateUserData, deleteUserData } from '../../services/UsersService';
import {
  fetchUsersSuccess,
  fetchUsersError,
  setLoading,
  addUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  operationError,
} from './Users';

export const fetchUsers = () => (dispatch) => {
  dispatch(setLoading());
  fetchUsersData()
    .then((res) => {
      dispatch(fetchUsersSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchUsersError(error.message));
    });
};

export const addUser = (data) => (dispatch) => {
  dispatch(setLoading());
  addUserData(data)
    .then((res) => {
      dispatch(addUserSuccess(res.data));
      dispatch(fetchUsers());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const updateUser = (id, data) => (dispatch) => {
  dispatch(setLoading());
  updateUserData(id, data)
    .then((res) => {
      dispatch(updateUserSuccess(res.data));
      dispatch(fetchUsers());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(setLoading());
  deleteUserData(id)
    .then(() => {
      dispatch(deleteUserSuccess(id));
      dispatch(fetchUsers());
    })
    .catch((error) => {
      dispatch(operationError(error.message));
    });
};
