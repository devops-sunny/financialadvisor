import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    fetchProductSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
    },
    updateProductSuccess: (state, action) => {
      const index = state.products.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      state.loading = false;
    },
    deleteProductSuccess: (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload);
      state.loading = false;
    },
    operationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchProductSuccess,
  fetchProductError,
  setLoading,
  addProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
  operationError,
} = productSlice.actions;

export default productSlice.reducer;
