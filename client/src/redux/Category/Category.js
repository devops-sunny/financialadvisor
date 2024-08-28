import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const CategorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    fetchCategoriesError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addCategorySuccess: (state, action) => {
      state.categories.push(action.payload);
      state.loading = false;
    },
    updateCategorySuccess: (state, action) => {
      state.loading = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.loading = false;
    },
    operationError: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  fetchCategoriesSuccess,
  fetchCategoriesError,
  setLoading,
  addCategorySuccess,
  updateCategorySuccess,
  deleteCategorySuccess,
  operationError,
} = CategorySlice.actions;

export default CategorySlice.reducer;


