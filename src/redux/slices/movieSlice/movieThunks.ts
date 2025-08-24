import {createAsyncThunk} from "@reduxjs/toolkit";
import type {MovieType} from "../../../models/MovieType.ts";
import {urlBuilder} from "../../../helpers/urlBuilder.ts";
import {urls} from "../../../constants/urls.ts";
import type {GenreType} from "../../../models/GenreType.ts";
import type {TMDBResDataType, TMDBResQueryType} from "../../../models/TMDBResponseType.ts";
import type {QueryParamsType} from "../../../models/QueryParamsType.ts";
import {apiThunk} from "../../../helpers/apiThunk.ts";

export const movieThunks = {
    loadMovies: createAsyncThunk('movieSlice/loadMovies', async (queryParams: QueryParamsType, thunkAPI) => {
        return await apiThunk<TMDBResDataType & TMDBResQueryType>(thunkAPI, urlBuilder(urls.movies.all, {...queryParams}))
    }),
    loadMovieById: createAsyncThunk('movieSlice/loadMovie', async (id: string, thunkAPI) => {
        return await apiThunk<MovieType>(thunkAPI, urlBuilder(urls.movies.getById(id)))
    }),
    loadMoviesByQuery: createAsyncThunk('movieSlice/loadMoviesByQuery', async (queryParams: QueryParamsType, thunkAPI) => {
        return await apiThunk<TMDBResDataType & TMDBResQueryType>(thunkAPI, urlBuilder(urls.movies.search, {...queryParams}))
    }),
    loadGenres: createAsyncThunk('movieSlice/loadGenres', async (_, thunkAPI) => {
        return await apiThunk<{ genres: GenreType[] }>(thunkAPI, urlBuilder(urls.movies.genres.all))
    })
}
