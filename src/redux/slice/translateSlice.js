import {createSlice} from "@reduxjs/toolkit";
import {translateText} from "../actions/index.js";

const initialState = {
    isLoading: false,
    error: null,
    answer:"",
}

const translateSlice = createSlice({
    name: "translate",
    initialState: initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(translateText.pending, (state, action) => {
            state.isLoading = true;
            state.answer = ""
        })

        builder.addCase(translateText.rejected, (state, {error}) => {
            state.isLoading = false;
            state.error = error.message;
        })

        builder.addCase(translateText.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.answer = action.payload;
        })
    }

})

export default translateSlice.reducer;