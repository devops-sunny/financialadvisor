import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const termsURL = `${API_URL}terms/`;

export const fetchTermsData = (options = null) => ApiService.get(termsURL, options);

export const addTermsData = (data, options = null) => ApiService.post(termsURL, data, options);

export const updateTermsData = (id, data, options = null) => ApiService.put(`${termsURL}${id}`, data, options);

export const deleteTermsData = (id, options = null) => ApiService.Delete(`${termsURL}${id}`, options);
