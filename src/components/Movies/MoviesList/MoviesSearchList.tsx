import {useAppSelector} from "@hooks/useAppSelector.ts";
import MoviesListSection from "./MoviesListSection.tsx";
import LoadingWrapper from "@components/UI/LoadingWrapper.tsx";
import EmptyMovies from "@components/UI/EmptyMovies.tsx";

const MoviesSearchList = () => {
    const movies = useAppSelector(state => state.movies);
    const queryMeta = useAppSelector(state => state.queryMeta);
    const isLoadingMovies = useAppSelector(state => state.loadingStates.isLoadingMovies);

    if (isLoadingMovies) return <LoadingWrapper/>

    if (!movies || !movies.length) return <EmptyMovies message="Movies not found"/>;

    return <MoviesListSection movies={movies} queryMeta={queryMeta}/>
};

export default MoviesSearchList;