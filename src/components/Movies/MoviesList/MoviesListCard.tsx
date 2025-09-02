import type {FC} from "react";
import type {MovieType} from "@models/MovieType.ts";
import Poster from "@components/Movies/Poster/Poster.tsx";
import {Link} from "react-router-dom";
import MovieRating from "@components/Movies/Rating/MovieRating.tsx";
import {getYearFromDate} from "@helpers/getYearFromDate.ts";
import {kebabCase} from "lodash";

type MoviesListCardProps = {
    movie: MovieType
}

const MoviesListCard: FC<MoviesListCardProps> = ({movie}) => {
    const linkToMovie = `/movie/${kebabCase(movie.title)}/${movie.id}`
    return (
        <li className={'flex flex-col items-center justify-center'}>
            <Link to={linkToMovie}>
            <Poster posterPath={movie.poster_path}/>
            </Link>
            <div className={'flex flex-col items-start max-[800px]:items-center max-[800px]:text-center'}>
                <Link to={linkToMovie}>
                    <h3 className={'w-[250px] overflow-hidden text-ellipsis whitespace-nowrap'}>{movie.title || 'No title'}</h3>
            </Link>
                <span>{getYearFromDate(movie.release_date) || 'No release date'}</span>
                <MovieRating voteAverage={movie.vote_average} voteCount={movie.vote_count}/>
            </div>
        </li>
    );
};

export default MoviesListCard;