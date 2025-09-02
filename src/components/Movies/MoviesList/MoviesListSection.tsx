import Pagination from "@components/Movies/Pagination/Pagination.tsx";
import type {MovieType} from "@models/MovieType.ts";
import type {FC} from "react";
import type {TMDBResQueryType} from "@models/TMDBResponseType.ts";
import {useParams} from "react-router-dom";
import {useAppQueryParams} from "@hooks/useAppQueryParams.ts";
import MoviesListItems from "./MoviesListItems.tsx";

export type MoviesListSectionProps = {
    movies: MovieType[],
    queryMeta: TMDBResQueryType | null
}

const MoviesListSection: FC<MoviesListSectionProps> = ({movies, queryMeta}) => {
    const {genreName} = useParams<{ genreName: string }>()
    const {query} = useAppQueryParams()
    return (
        <section className={`flex flex-col justify-center items-center min-h-screen !px-12`}>
            <h2 className={'text-center'}>
                {genreName
                    ? `Movies by genre: ${genreName}`
                    : query
                        ? `Search results for "${query}"`
                        : 'All movies'}
            </h2>
            <MoviesListItems movies={movies}/>
            <Pagination queryMeta={queryMeta}/>
        </section>
    );
};

export default MoviesListSection;
