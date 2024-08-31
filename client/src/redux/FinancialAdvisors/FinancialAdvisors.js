import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  financialAdvisors: [],
  loading: false,
  error: null,
};

const financialAdvisorsSlice = createSlice({
  name: 'FinancialAdvisors',
  initialState,
  reducers: {
    fetchFinancialAdvisorsSuccess: (state, action) => {
      state.financialAdvisors = action.payload;
      state.loading = false;
    },
    fetchFinancialAdvisorsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addFinancialAdvisorSuccess: (state, action) => {
      state.financialAdvisors.push(action.payload);
      state.loading = false;
    },
    updateFinancialAdvisorSuccess: (state, action) => {
      const index = state.financialAdvisors.findIndex(advisor => advisor._id === action.payload._id);
      if (index !== -1) {
        state.financialAdvisors[index] = action.payload;
      }
      state.loading = false;
    },
    deleteFinancialAdvisorSuccess: (state, action) => {
      state.financialAdvisors = state.financialAdvisors.filter(advisor => advisor._id !== action.payload);
      state.loading = false;
    },
    operationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchFinancialAdvisorsSuccess,
  fetchFinancialAdvisorsError,
  setLoading,
  addFinancialAdvisorSuccess,
  updateFinancialAdvisorSuccess,
  deleteFinancialAdvisorSuccess,
  operationError,
} = financialAdvisorsSlice.actions;

export default financialAdvisorsSlice.reducer;
