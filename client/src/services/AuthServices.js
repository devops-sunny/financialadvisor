import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const postURL = `${API_URL}auth/`;

export const RegisterIn = (data, options = null) => ApiService.post(`${postURL}signup`, data, options);

export const LoginIn = (data, options = null) => ApiService.post(`${postURL}login`, data, options);
