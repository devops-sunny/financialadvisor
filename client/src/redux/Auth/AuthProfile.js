import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    error: null,
    token:"",
    role:"",
    id:"",
    payload:[],
};

const AuthProfileSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        AuthDetails: (state, action) => {
            state.message = "";
            state.error = null;
            state.token = action?.payload?.token;
            state.role = action?.payload?.role;
            state.id = action?.payload?.id;
            state.payload=action?.payload;
        },
    },
});

export const { AuthDetails } = AuthProfileSlice.actions;
export default AuthProfileSlice.reducer;