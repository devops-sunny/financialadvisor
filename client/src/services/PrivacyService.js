import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const privacyURL = `${API_URL}privacy/`;

export const fetchPrivacyData = (options = null) => ApiService.get(privacyURL, options);

export const addPrivacyData = (data, options = null) => ApiService.post(privacyURL, data, options);

export const updatePrivacyData = (id, data, options = null) => ApiService.put(`${privacyURL}${id}`, data, options);

export const deletePrivacyData = (id, options = null) => ApiService.Delete(`${privacyURL}${id}`, options);
