import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const defaultOptions = {
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Accept": "*/*",
    },
};

const axiosInstance = axios.create(defaultOptions);

const requestHandler = (request) => {
    request.headers["request-type"] = "web";
    const token = localStorage.getItem("Token");
    if (token) request.headers.Authorization = `Bearer ${token}`; 
    return request;
};

const responseHandler = (response) => response.data; 

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use((response) => responseHandler(response));

export { API_URL, axiosInstance };
