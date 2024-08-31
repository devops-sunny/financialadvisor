import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const appointmentURL = `${API_URL}appointments/`;

export const fetchAppointmentsData = (options = null) => ApiService.get(appointmentURL, options);

export const addAppointmentData = (data, options = null) => ApiService.post(appointmentURL, data, options);

export const updateAppointmentData = (id, data, options = null) => ApiService.put(`${appointmentURL}${id}`, data, options);

export const deleteAppointmentData = (id, options = null) => ApiService.Delete(`${appointmentURL}${id}`, options);
