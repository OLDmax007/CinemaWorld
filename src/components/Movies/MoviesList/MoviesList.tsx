import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import Pagination from "../../UI/Pagination/Pagination.tsx";
import type {MovieType} from "../../../models/MovieType.ts";
import {type FC} from "react";
import MovieSearchForm from "../../UI/MovieSearchForm.tsx";

type MovieListProps = {
    movies: MovieType[]
    page: string
}


const MoviesList:FC<MovieListProps> = ({movies, page}) => {
    const queryMeta = useAppSelector(state => state.queryMeta)
    return (
        <main>
            <ul>
                {movies.map((movie, index) => <li key={index}>
                    {movie.title}
                </li>  )}
            </ul>
            <MovieSearchForm page={page}/>
            <Pagination queryMeta={queryMeta} maxPages={500}/>
        </main>
    );
};

export default MoviesList;