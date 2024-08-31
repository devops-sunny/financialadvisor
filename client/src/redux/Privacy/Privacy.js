import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  privacyPolicies: [],
  loading: false,
  error: null,
};

const privacySlice = createSlice({
  name: 'privacy',
  initialState,
  reducers: {
    fetchPrivacySuccess: (state, action) => {
      state.privacyPolicies = action.payload;
      state.loading = false;
    },
    fetchPrivacyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addPrivacySuccess: (state, action) => {
      state.privacyPolicies.push(action.payload);
      state.loading = false;
    },
    updatePrivacySuccess: (state, action) => {
      state.loading = false;
    },
    deletePrivacySuccess: (state, action) => {
      state.loading = false;
    },
    operationError: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  fetchPrivacySuccess,
  fetchPrivacyError,
  setLoading,
  addPrivacySuccess,
  updatePrivacySuccess,
  deletePrivacySuccess,
  operationError,
} = privacySlice.actions;

export default privacySlice.reducer;
