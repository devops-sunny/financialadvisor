import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const categoryURL = `${API_URL}categories/`;

export const fetchSubCategoriesData = (options = null) => ApiService.get(categoryURL, options);

export const addSubCategoryData = (data, options = null) => ApiService.post(categoryURL, data, options);

export const updateSubCategoryData = (id, data, options = null) => ApiService.put(`${categoryURL}${id}`, data, options);

export const deleteSubCategoryData = (id, options = null) => ApiService.Delete(`${categoryURL}${id}`, options);
