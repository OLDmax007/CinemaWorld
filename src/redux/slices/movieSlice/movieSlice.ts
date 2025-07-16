import {createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import {movieSliceState} from "./movieSliceState.ts";
import {movieThunks} from "./movieThunks.ts";
import type {MovieType} from "../../../models/MovieType.ts";
import type {GenresListType} from "../../../models/GenreType.ts";

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(movieThunks.loadMovies.fulfilled,
        (state, action: PayloadAction<MovieType[]>) => {
            state.movies = action.payload
        }).addCase(movieThunks.loadGenres.fulfilled,
        (state, action: PayloadAction<GenresListType>) => {
            state.genres = action.payload.genres
        })
        .addMatcher(isFulfilled(movieThunks.loadMovieById, movieThunks.loadMovieByQuery),
            (state, action: PayloadAction<MovieType>) => {
                state.movie = action.payload
            })
})