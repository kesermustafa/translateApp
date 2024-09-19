import {configureStore} from "@reduxjs/toolkit";
import languageReducer from "./slice/languageSlice.js";


const store = configureStore({
    reducer: {
        lang: languageReducer,
    }
});

export default store;

