import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import Pagination from "../../UI/Pagination/Pagination.tsx";
import type {MovieType} from "../../../models/MovieType.ts";
import {useCallback} from "react";
import MoviesListCard from "./MoviesListCard.tsx";
import {useAppPageParam} from "../../../hooks/useAppPageParam.ts";
import {movieThunks} from "../../../redux/slices/movieSlice/movieThunks.ts";
import {useAppThunkData} from "../../../hooks/useAppThunkData.ts";
import styles from './movies.module.css'
import RenderStatus from "../../UI/RenderStatus.tsx";
import {useParams} from "react-router-dom";
import EmptyMovies from "../../UI/EmptyMovies.tsx";


const MoviesList = () => {
    const {queryMeta, isLoadingMovies} = useAppSelector(state => state)
    const {genreId} = useParams<{ genreId: string }>()
    const page = useAppPageParam()
    const loadMoviesCallback = useCallback(() => {
        return movieThunks.loadMovies({
            page,
            ...(genreId ? {with_genres: genreId.toString()} : {})
        });
    }, [page, genreId]);

    const movies = useAppThunkData<MovieType[]>(loadMoviesCallback, (state) => state.movies)

    if (!movies || !movies.length) return <EmptyMovies message="Movies not found"/>;

    return (
        <section className={styles.moviesSection}>
            <RenderStatus isLoading={isLoadingMovies}>
                <ul className={styles.moviesList}>
                    {movies.map((movie) => (
                        <MoviesListCard key={movie.id} movie={movie}/>
                    ))}
                </ul>
                <Pagination queryMeta={queryMeta}/>
            </RenderStatus>
        </section>
    );
};

export default MoviesList;