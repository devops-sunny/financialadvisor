import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';


const initialState = {
  isLoading: false,
  error: null,
  products: [],
  product: {},
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },

    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },

  },
});

export default slice.reducer;

export const {
  startLoading ,hasError ,getProductsSuccess ,getProductSuccess
} = slice.actions;


export function getProducts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/products');
      dispatch(slice.actions.getProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}



