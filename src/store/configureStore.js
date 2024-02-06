import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";

const rootReducer = combineReducers({
    loading: loadingReducer,
});

export const store = configureStore({ reducer: rootReducer });