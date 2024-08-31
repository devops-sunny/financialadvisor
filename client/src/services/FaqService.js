import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const faqURL = `${API_URL}faq/`;

export const fetchFaqsData = (options = null) => ApiService.get(faqURL, options);

export const addFaqData = (data, options = null) => ApiService.post(faqURL, data, options);

export const updateFaqData = (id, data, options = null) => ApiService.put(`${faqURL}${id}`, data, options);

export const deleteFaqData = (id, options = null) => ApiService.Delete(`${faqURL}${id}`, options);
