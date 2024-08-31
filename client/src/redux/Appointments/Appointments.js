import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    fetchAppointmentsSuccess: (state, action) => {
      state.appointments = action.payload;
      state.loading = false;
    },
    fetchAppointmentsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    addAppointmentSuccess: (state, action) => {
      state.appointments.push(action.payload);
      state.loading = false;
    },
    updateAppointmentSuccess: (state, action) => {
      const index = state.appointments.findIndex(appointment => appointment._id === action.payload._id);
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
      state.loading = false;
    },
    deleteAppointmentSuccess: (state, action) => {
      state.appointments = state.appointments.filter(appointment => appointment._id !== action.payload);
      state.loading = false;
    },
    operationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchAppointmentsSuccess,
  fetchAppointmentsError,
  setLoading,
  addAppointmentSuccess,
  updateAppointmentSuccess,
  deleteAppointmentSuccess,
  operationError,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
