import {useAppSelector} from "@hooks/useAppSelector.ts";
import type {MovieType} from "@models/MovieType.ts";
import {useCallback} from "react";
import {useAppQueryParams} from "@hooks/useAppQueryParams.ts";
import {movieThunks} from "@redux/slices/movieSlice/movieThunks.ts";
import {useAppThunkData} from "@hooks/useAppThunkData.ts";
import LoadingWrapper from "@components/UI/LoadingWrapper.tsx";
import {useParams} from "react-router-dom";
import EmptyMovies from "@components/UI/EmptyMovies.tsx";
import MoviesListSection from "./MoviesListSection.tsx";

const MoviesList = () => {
    const queryMeta = useAppSelector(state => state.queryMeta);
    const isLoadingMovies = useAppSelector(state => state.loadingStates.isLoadingMovies);
    const {genreId} = useParams<{ genreId: string }>()
    const {page} = useAppQueryParams()
    const loadMoviesCallback = useCallback(() => {
        return movieThunks.loadMovies({
            page,
            ...((genreId && +genreId !== 0) ? {with_genres: genreId.toString()} : {})
        });
    }, [page, genreId]);

    const movies = useAppThunkData<MovieType[]>(loadMoviesCallback, (state) => state.movies)

    if (isLoadingMovies) return <LoadingWrapper/>

    if (!movies || !movies.length) return <EmptyMovies message="Movies not found"/>;

    return <MoviesListSection movies={movies} queryMeta={queryMeta}/>
};

export default MoviesList;