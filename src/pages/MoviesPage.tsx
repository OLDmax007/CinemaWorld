import MoviesList from "../components/Movies/MoviesList/MoviesList.tsx";
import Genres from "../components/Movies/Genre/Genres.tsx";
import {useAppThunkData} from "../hooks/useAppThunkData.ts";
import {movieThunks} from "../redux/slices/movieSlice/movieThunks.ts";
import {useAppPageParam} from "../hooks/useAppPageParam.ts";
import {useCallback} from "react";
import type {MovieType} from "../models/MovieType.ts";
import {useParams} from "react-router-dom";

const MoviesPage = () => {
    const genres = useAppThunkData(movieThunks.loadGenres, (state) => state.genres)
    const page = useAppPageParam()
    const {genreId} = useParams<{genreId: string}>()

    const loadMoviesCallback = useCallback(() => {
        return movieThunks.loadMovies({
            page,
            ...(genreId ? { with_genres: genreId.toString() } : {})
        });
    }, [page, genreId]);

    const movies = useAppThunkData<MovieType[]>(loadMoviesCallback , (state) => state.movies)

    return (
        <>
            {(genres && movies) &&
                <>
                    <MoviesList movies={movies} page={page}/>
                    <Genres genres={genres} variant={'filter'}/>
                </>
            }
        </>
    );
};

export default MoviesPage;