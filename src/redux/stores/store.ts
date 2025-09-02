import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "@redux/slices/movieSlice/movieSlice.ts";

export const store = configureStore({
    reducer: movieSlice.reducer
})