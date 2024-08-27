import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    error: null,
    token:"",
    role:"",
    id:"",
    FinancialAdvisorid:"",
    payload:[],
};

const AuthProfileSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        AuthDetails: (state, action) => {
            console.log(action?.payload)
            state.message = "";
            state.error = null;
            state.token = action?.payload.data.token;
            state.role = action?.payload?.data.user.role;
            state.id =  action?.payload?.data.user._id;
            state.payload=action?.payload;
            state.FinancialAdvisorid =  action?.payload?.data.user.FinancialAdvisorid;
        },
    },
});

export const { AuthDetails } = AuthProfileSlice.actions;
export default AuthProfileSlice.reducer;