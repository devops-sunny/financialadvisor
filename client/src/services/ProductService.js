import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const productURL = `${API_URL}products/`;

export const fetchProductsData = (options = null) => ApiService.get(productURL, options);

export const addProductData = (data, options = null) => ApiService.post(productURL, data, options);

export const updateProductData = (id, data, options = null) => ApiService.put(`${productURL}${id}`, data, options);

export const deleteProductData = (id, options = null) => ApiService.Delete(`${productURL}${id}`, options);
