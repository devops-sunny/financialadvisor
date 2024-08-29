import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const categoryURL = `${API_URL}parentCategories/`;

export const fetchCategoriesData = (options = null) => ApiService.get(categoryURL, options);

export const addCategoryData = (data, options = null) => ApiService.post(categoryURL, data, options);

export const updateCategoryData = (id, data, options = null) => ApiService.put(`${categoryURL}${id}`, data, options);

export const deleteCategoryData = (id, options = null) => ApiService.Delete(`${categoryURL}${id}`, options);
