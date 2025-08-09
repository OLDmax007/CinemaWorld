import MoviesList from "../components/Movies/MoviesList/MoviesList.tsx";
import Genres from "../components/Movies/Genre/Genres.tsx";
import {useAppThunkData} from "../hooks/useAppThunkData.ts";
import {movieThunks} from "../redux/slices/movieSlice/movieThunks.ts";
import {useAppPageParam} from "../hooks/useAppPageParam.ts";
import {useCallback, useState} from "react";
import type {MovieType} from "../models/MovieType.ts";

const MoviesPage = () => {
    const [genreId, setGenreId] = useState<number | null>(null);
    const genres = useAppThunkData(movieThunks.loadGenres, (state) => state.genres)
    const page = useAppPageParam()

    const loadMoviesCallback = useCallback(() => {
        return movieThunks.loadMovies({
            page,
            ...(genreId !== null && { with_genres: genreId.toString() })
        });
    }, [page, genreId]);

    const movies = useAppThunkData<MovieType[]>(loadMoviesCallback , (state) => state.movies)

    const handleGenreClick = (genreId: number) => {
        setGenreId(genreId)
    };

    return (
        <>
            {(genres && movies) &&
                <>
                    <MoviesList movies={movies} page={page}/>
                    <Genres genres={genres} variant={'filter'} handleClick={handleGenreClick}/>
                </>
            }
        </>
    );
};

export default MoviesPage;