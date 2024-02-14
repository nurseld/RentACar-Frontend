import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";
import { carsReducer } from "./cars/carsSlice";
import { usersReducer } from "./users/usersSlice";
import { authSlice } from "./auth/authSlice";
import { storeAuthState } from "./storage/storage";

const rootReducer = combineReducers({
    loading: loadingReducer,
    cars: carsReducer,
    users: usersReducer,
    auth: authSlice.reducer
});

export const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
    storeAuthState(store.getState().auth)

})