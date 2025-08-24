import {createSlice, isFulfilled, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {movieSliceState} from "./movieSliceState.ts";
import {movieThunks} from "./movieThunks.ts";
import type {TMDBResDataType, TMDBResQueryType} from "../../../models/TMDBResponseType.ts";
import type {MovieType} from "../../../models/MovieType.ts";
import type {GenreType} from "../../../models/GenreType.ts";
import {setLoadingState} from "../../../helpers/setLoadingState.ts";

const {loadMovies, loadMoviesByQuery, loadMovieById, loadGenres} = movieThunks

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovieById.fulfilled,
            (state, action: PayloadAction<MovieType>) => {
                state.movie = action.payload
            })
        .addCase(loadGenres.fulfilled,
            (state, action: PayloadAction<{genres: GenreType[]}>) => {
                state.genres = [{id: 0, name: 'Movies'}, ...action.payload.genres]
            })
        .addMatcher(isFulfilled(loadMovies, loadMoviesByQuery),
            (state, action: PayloadAction<TMDBResDataType & TMDBResQueryType>) => {
                const {results, total_results, page, total_pages} = action.payload
                state.movies = results
                state.queryMeta = {total_results, total_pages, page}
            })
        .addMatcher(isFulfilled(loadMovies,
                loadMoviesByQuery,
                loadMovieById,
                loadGenres),
            (state, action) => {
                setLoadingState(state, action.type, false)
            })
        .addMatcher(isPending(loadMovies,
                loadMoviesByQuery,
                loadMovieById,
                loadGenres),
            (state, action) => {
                setLoadingState(state, action.type, true)
        })
        .addMatcher(isRejected(loadMovies,
                loadMoviesByQuery,
                loadMovieById,
                loadGenres),
            (state, action) => {
                console.error(action.payload)
                setLoadingState(state, action.type, false)
            })

})
