import type {MovieType} from "../../../models/MovieType.ts";
import type {GenreType} from "../../../models/GenreType.ts";

export type movieSliceStateType = {
    movies: MovieType[]
    genres: GenreType[]
    movie: MovieType | null
}

export const movieSliceState: movieSliceStateType = {
    movies: [],
    genres: [],
    movie: null,
}