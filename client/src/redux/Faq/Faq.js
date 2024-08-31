import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faqs: [],
  loading: false,
  error: null,
};

const faqSlice = createSlice({
  name: 'FAQ',
  initialState,
  reducers: {
    fetchFaqsSuccess: (state, action) => {
      state.faqs = action.payload;
      state.loading = false;
    },
    fetchFaqsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addFaqSuccess: (state, action) => {
      state.faqs.push(action.payload);
      state.loading = false;
    },
    updateFaqSuccess: (state, action) => {
      state.loading = false;
    },
    deleteFaqSuccess: (state, action) => {
      state.loading = false;
    },
    operationError: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  fetchFaqsSuccess,
  fetchFaqsError,
  setLoading,
  addFaqSuccess,
  updateFaqSuccess,
  deleteFaqSuccess,
  operationError,
} = faqSlice.actions;

export default faqSlice.reducer;
