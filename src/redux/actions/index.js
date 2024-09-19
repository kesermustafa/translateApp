import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/index.js";

export const getLangs = createAsyncThunk("lang/getLangs", async () => {

    const res = await api.get('/getLanguages');


    return res.data.data.languages;
})