import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {movieSliceState} from "./movieSliceState.ts";
import {movieThunks} from "./movieThunks.ts";
import type {TMDBResDataType, TMDBResQueryType} from "../../../models/TMDBResponseType.ts";
import type {MovieType} from "../../../models/MovieType.ts";
import type {GenreType} from "../../../models/GenreType.ts";

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(movieThunks.loadMovieById.fulfilled,
            (state, action: PayloadAction<MovieType>) => {
                state.movie = action.payload
            })
        .addCase(movieThunks.loadGenres.fulfilled,
            (state, action: PayloadAction<GenreType[]>) => {
                state.genres = action.payload
            })
        .addMatcher(isFulfilled(movieThunks.loadMovies, movieThunks.loadMoviesByQuery),
            (state, action: PayloadAction<TMDBResDataType & TMDBResQueryType>) => {
                const {results, total_results, page, total_pages} = action.payload
                state.movies = results
                state.queryMeta = {total_results, total_pages, page}
            })
        .addMatcher(isRejected(), (_, action) => {
            console.error(action.payload)
        })
})