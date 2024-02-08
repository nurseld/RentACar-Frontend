import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";
import { carsReducer } from "./cars/carsSlice";

const rootReducer = combineReducers({
    loading: loadingReducer,
    cars: carsReducer,
});

export const store = configureStore({ reducer: rootReducer });