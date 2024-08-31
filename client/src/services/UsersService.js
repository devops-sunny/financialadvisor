import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const usersURL = `${API_URL}users/`;

export const fetchUsersData = (options = null) => ApiService.get(usersURL, options);

export const addUserData = (data, options = null) => ApiService.post(usersURL, data, options);

export const updateUserData = (id, data, options = null) => ApiService.put(`${usersURL}${id}`, data, options);

export const deleteUserData = (id, options = null) => ApiService.Delete(`${usersURL}${id}`, options);
