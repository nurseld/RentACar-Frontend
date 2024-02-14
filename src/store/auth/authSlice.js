import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../../core/utils/interceptors/axiosInterceptors";
import { loadAuthState } from "../storage/storage";

export const authSlice = createSlice({
    name: 'auth',
    initialState: loadAuthState(),
    reducers: {

        loginSuccess: (state, action) => {

            state.id = action.payload.id;
            state.role = action.payload.role;
            setToken(action.payload.token)
        },

        logoutSuccess: (state) => {

            state.id = 0;
            delete state.role
            setToken()
        },



    }
})


export const { loginSuccess, logoutSuccess } = authSlice.actions;