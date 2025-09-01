import type {MovieType} from "@models/MovieType.ts";
import type {GenreType} from "@models/GenreType.ts";
import type {TMDBResQueryType} from "@models/TMDBResponseType.ts";
import type {MovieDetailsType} from "@models/MovieDetailsType.ts";

export type movieSliceStateType = {
    movies: MovieType[]
    genres: GenreType[]
    queryMeta: TMDBResQueryType | null
    movie: MovieDetailsType | null
    loadingStates: {
        isLoadingMovie: boolean;
        isLoadingMovies: boolean;
        isLoadingGenres: boolean;
    }
}

export const movieSliceState: movieSliceStateType = {
    movies: [],
    genres: [],
    queryMeta: null,
    movie: null,
    loadingStates: {
        isLoadingMovie: false,
        isLoadingMovies: false,
        isLoadingGenres: false
    }
}