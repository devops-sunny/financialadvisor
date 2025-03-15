import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const categoryURL = `${API_URL}feedback/`;

export const fetchfeedbacksData = (options = null) =>
  ApiService.get(categoryURL, options);

export const addfeedbackData = (data, options = null) =>
  ApiService.post(categoryURL, data, options);

