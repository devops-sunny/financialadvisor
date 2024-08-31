import {
    addAppointmentSuccess,
    deleteAppointmentSuccess,
    fetchAppointmentsError,
    fetchAppointmentsSuccess,
    operationError,
    setLoading,
    updateAppointmentSuccess,
  } from "./Appointments";
  import {
    addAppointmentData,
    deleteAppointmentData,
    fetchAppointmentsData,
    updateAppointmentData,
  } from "../../services/AppointmentService";
  
  export const fetchAppointments = () => (dispatch) => {
    dispatch(setLoading());
    fetchAppointmentsData()
      .then((res) => {
        dispatch(fetchAppointmentsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchAppointmentsError(error.message));
      });
  };
  
  export const addAppointment = (data) => (dispatch) => {
    dispatch(setLoading());
    addAppointmentData(data)
      .then((res) => {
        dispatch(addAppointmentSuccess(res.data));
        dispatch(fetchAppointments()); 
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const updateAppointment = (id, data) => (dispatch) => {
    dispatch(setLoading());
    updateAppointmentData(id, data)
      .then((res) => {
        dispatch(updateAppointmentSuccess(res.data));
        dispatch(fetchAppointments()); 
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  
  export const deleteAppointment = (id) => (dispatch) => {
    dispatch(setLoading());
    deleteAppointmentData(id)
      .then(() => {
        dispatch(deleteAppointmentSuccess(id));
        dispatch(fetchAppointments()); 
      })
      .catch((error) => {
        dispatch(operationError(error.message));
      });
  };
  