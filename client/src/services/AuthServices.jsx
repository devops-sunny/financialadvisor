import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";
let postURL = API_URL + "auth/";

export const RegisterIn = (data, options = null) => {
    return ApiService.post(postURL + "register", data, options);
};

export const LoginIn = (data, options = null) => {
    return ApiService.post(postURL + "login", data, options);
};
