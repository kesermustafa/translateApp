import {configureStore} from "@reduxjs/toolkit";
import languageReducer from "./slice/languageSlice.js";
import translationsReducer from "./slice/translateSlice.js";

const store = configureStore({
    reducer: {
        lang: languageReducer,
        translate: translationsReducer,
    }
});

export default store;

