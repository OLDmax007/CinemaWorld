import type {FC} from "react";
import type {MovieType} from "../../../models/MovieType.ts";
import StarsRating from "../Rating/StarsRating.tsx";
import Poster from "../Poster/Poster.tsx";
import StarIcon from '../Rating/star.svg?react'
import {Link} from "react-router-dom";

type MoviesListCardProps = {
    movie: MovieType
}


const MoviesListCard: FC<MoviesListCardProps> = ({movie}) => {
    const date = new Date(movie.release_date)

    return (
        <li>
            <Link to={`/movie/${movie.title}/${movie.id}`}>
            <Poster posterPath={movie.poster_path}/>
            </Link>
            <div>
            <Link to={`/movie/${movie.title}/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
            <span>{date ? date.getFullYear() : 0}</span>
            <div className={'flex gap-5 items-center  whitespace-nowrap'}>
                <StarsRating icon={StarIcon} count={10}
                             defaultRating={Math.round(movie.vote_average)}/>
                    <span className="text-sm text-yellow-500">{movie.vote_average}/{movie.vote_count} votes</span>
            </div>
            </div>
        </li>
    );
};

export default MoviesListCard;