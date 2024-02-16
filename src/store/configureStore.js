import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";
import { carsReducer } from "./cars/carsSlice";
import { usersReducer } from "./users/usersSlice";
import { authSlice } from "./auth/authSlice";
import { storeAuthState, storeRentalState } from "./storage/storage";
import { rentalSlice } from "./rental/rentalSlice";

const rootReducer = combineReducers({
    loading: loadingReducer,
    cars: carsReducer,
    users: usersReducer,
    auth: authSlice.reducer,
    rental: rentalSlice.reducer
});

export const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
    storeAuthState(store.getState().auth)
    storeRentalState(store.getState().rental)
})
