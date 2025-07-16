import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiService} from "../../../services/api.service.ts";
import type {MovieType} from "../../../models/MovieType.ts";
import {urlBuilder} from "../../../helpers/urlBuilder.ts";
import {urls} from "../../../constants/urls.ts";
import {handleError} from "../../../helpers/handleError.ts";
import type {GenresListType} from "../../../models/GenreType.ts";
import type {TMDBResDataType, TMDBResQueryType} from "../../../models/TMDBResponseType.ts";

export const movieThunks = {
    loadMovies: createAsyncThunk('movieSlice/loadMovies', async (_, thunkAPI) => {
            try {
                return  await apiService.get<TMDBResDataType & TMDBResQueryType>(urlBuilder(urls.movies.all))

            } catch (error) { return  thunkAPI.rejectWithValue(handleError(error)) }
    }),

    loadMovieById: createAsyncThunk('movieSlice/loadMovie', async (id: string, thunkAPI) => {
        try {
            return  await apiService.get<MovieType>(urlBuilder(urls.movies.getById(id)))
        } catch (error) { return  thunkAPI.rejectWithValue(handleError(error)) }
    }),

    loadMovieByQuery: createAsyncThunk('movieSlice/loadMovie', async (query: string, thunkAPI) => {
        try {
            return await apiService.get<MovieType>(urlBuilder(urls.movies.search, {query}))

        } catch (error) { return  thunkAPI.rejectWithValue(handleError(error)) }
    }),

    loadGenres: createAsyncThunk('movieSlice/loadGenres', async (_, thunkAPI) => {
        try {
            return await apiService.get<GenresListType>(urlBuilder(urls.movies.genres.all))
        } catch (error) { return  thunkAPI.rejectWithValue(handleError(error)) }
    })
}