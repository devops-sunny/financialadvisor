import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addUserSuccess: (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
    },
    updateUserSuccess: (state, action) => {
      const index = state.users.findIndex(user => user._id === action.payload._id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      state.loading = false;
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(user => user._id !== action.payload);
      state.loading = false;
    },
    operationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchUsersSuccess,
  fetchUsersError,
  setLoading,
  addUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  operationError,
} = usersSlice.actions;

export default usersSlice.reducer;
