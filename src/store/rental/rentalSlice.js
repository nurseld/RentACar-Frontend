import { createSlice } from "@reduxjs/toolkit";
import { loadRentalState } from "../storage/storage";




export const rentalSlice = createSlice({
    name: 'rental',
    initialState: loadRentalState(),


    reducers: {

        loadRental: (state, action) => {

            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate;
        },

        loadCar: (state, action) => {

            state.carId = action.payload;

        },

        deleteRental: (state) => {

            state.startDate = ""
            state.endDate = ""
            state.carId = 0


        },
    }
})







export const { loadRental, deleteRental, loadCar } = rentalSlice.actions;