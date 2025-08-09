import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiService} from "../../../services/api.service.ts";
import type {MovieType} from "../../../models/MovieType.ts";
import {urlBuilder} from "../../../helpers/urlBuilder.ts";
import {urls} from "../../../constants/urls.ts";
import {handleError} from "../../../helpers/handleError.ts";
import type {GenreType} from "../../../models/GenreType.ts";
import type {TMDBResDataType, TMDBResQueryType} from "../../../models/TMDBResponseType.ts";
import type {QueryParamsType} from "../../../models/QueryParamsType.ts";


export const movieThunks = {
    loadMovies: createAsyncThunk('movieSlice/loadMovies', async (queryParams: QueryParamsType, thunkAPI) => {
        try {
            return await apiService.get<TMDBResDataType & TMDBResQueryType>(urlBuilder(urls.movies.all, {...queryParams}))

        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }),

    loadMovieById: createAsyncThunk('movieSlice/loadMovie', async (id: string, thunkAPI) => {
        try {
            return await apiService.get<MovieType>(urlBuilder(urls.movies.getById(id)))
        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }),

    loadMoviesByQuery: createAsyncThunk('movieSlice/loadMoviesByQuery', async (queryParams: QueryParamsType, thunkAPI) => {
        try {
            return await apiService.get<TMDBResDataType & TMDBResQueryType>(urlBuilder(urls.movies.search, {...queryParams}))

        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }),

    loadGenres: createAsyncThunk('movieSlice/loadGenres', async (_, thunkAPI) => {
        try {
            return await apiService.get<{ genres: GenreType[] }>(urlBuilder(urls.movies.genres.all))
        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    })
}