import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const SubCategorySlice = createSlice({
  name: 'SubCategory',
  initialState,
  reducers: {
    fetchSubCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    fetchSubCategoriesError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addSubCategorySuccess: (state, action) => {
      state.categories.push(action.payload);
      state.loading = false;
    },
    updateSubCategorySuccess: (state, action) => {
      state.loading = false;
    },
    deleteSubCategorySuccess: (state, action) => {
      state.loading = false;
    },
    operationError: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  fetchSubCategoriesSuccess,
  fetchSubCategoriesError,
  setLoading,
  addSubCategorySuccess,
  updateSubCategorySuccess,
  deleteSubCategorySuccess,
  operationError,
} = SubCategorySlice.actions;

export default SubCategorySlice.reducer;


