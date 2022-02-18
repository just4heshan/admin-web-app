import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import contactReducer from "./slicers/contactSlice";
import authReducer from './slicers/authSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        contact: contactReducer,
        form: formReducer,
    },
});
