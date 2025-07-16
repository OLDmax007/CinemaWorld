import {createSlice} from "@reduxjs/toolkit";
import {movieSliceState} from "./movieSliceState.ts";

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieSliceState,
    reducers: {

    }
})