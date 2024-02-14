import { createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";


const usersSlice = createSlice(
    {
        name: "users",
        initialState: {
            user: {},
        },
        reducers: {
            setUser: (state, action) => {
                return { ...state, user: [...state.user, action.payload] };
            }
        }
    }
)

export const usersReducer = usersSlice.reducer;
export const { setUser } = usersSlice.actions;