import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  terms: [],
  loading: false,
  error: null,
};

const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
    fetchTermsSuccess: (state, action) => {
      state.terms = action.payload;
      state.loading = false;
    },
    fetchTermsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addTermsSuccess: (state, action) => {
      state.terms.push(action.payload);
      state.loading = false;
    },
    updateTermsSuccess: (state, action) => {
      const index = state.terms.findIndex(term => term._id === action.payload._id);
      if (index >= 0) {
        state.terms[index] = action.payload;
      }
      state.loading = false;
    },
    deleteTermsSuccess: (state, action) => {
      state.terms = state.terms.filter(term => term._id !== action.payload);
      state.loading = false;
    },
    operationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchTermsSuccess,
  fetchTermsError,
  setLoading,
  addTermsSuccess,
  updateTermsSuccess,
  deleteTermsSuccess,
  operationError,
} = termsSlice.actions;

export default termsSlice.reducer;
