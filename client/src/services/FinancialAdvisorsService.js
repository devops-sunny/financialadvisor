import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const financialAdvisorsURL = `${API_URL}financialAdvisors/`;

export const fetchFinancialAdvisorsData = (options = null) => ApiService.get(financialAdvisorsURL, options);

export const addFinancialAdvisorData = (data, options = null) => ApiService.post(financialAdvisorsURL, data, options);

export const updateFinancialAdvisorData = (id, data, options = null) => ApiService.put(`${financialAdvisorsURL}${id}`, data, options);

export const deleteFinancialAdvisorData = (id, options = null) => ApiService.Delete(`${financialAdvisorsURL}${id}`, options);
