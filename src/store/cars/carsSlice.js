import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialCars: [],
};

const carsSlice = createSlice(
    {
        name: "cars",
        initialState,
        reducers: {
            setInitialCars: (state, action) => {
                return { ...state, initialCars: [...state.initialCars, action.payload] };
            }
        }
    }
)

export const carsReducer = carsSlice.reducer;
export const { setInitialCars } = carsSlice.actions;