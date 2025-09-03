import type {FC} from "react";
import styles from './movie-info.module.css'
import Genres from "@components/Movies/Genre/Genres.tsx";
import MovieRating from "@components/Movies/Rating/MovieRating.tsx";
import type {MovieDetailsType} from "@models/MovieDetailsType.ts";
import {getYearFromDate} from "@helpers/getYearFromDate.ts";
import {Link} from "react-router-dom";

type MovieInfoListProps = {
    movie: MovieDetailsType;
};
const MovieInfoList: FC<MovieInfoListProps> = ({movie}) => {
    return (
        <ul className={`${styles.movieInfoList} flex-2 !p-4 w-[800px] sm:w-full xs:w-full break-words`}>
            <li>
                <strong>Title:</strong>
                <span>{movie.title || 'No title'}</span>
            </li>
            <li>
                <strong>Tagline:</strong>
                <span>{movie.tagline || 'No tagline'}</span>
            </li>
            <li>
                <strong>Overview:</strong>
                <span>{movie.overview || 'No overview'}</span>
            </li>
            <li>
                <strong>Release date:</strong>
                <span>{getYearFromDate(movie.release_date) || 'No release date'}</span>
            </li>
            <li>
                <strong>Runtime:</strong>
                <span>{movie.runtime ? `${movie.runtime} min` : 'No runtime'}</span>
            </li>
            <li className={'w-50'}>
                <strong>Genres:</strong>
                <Genres genres={movie.genres} variant="filter" size="small"/>
            </li>
            <li>
                <strong>Languages:</strong>
                <span>
                    {movie.spoken_languages.length > 0
                        ? movie.spoken_languages.map(lang => lang.english_name).join(', ')
                        : 'No languages'}
                </span>
            </li>
            <li>
                <strong>Production Companies:</strong>
                <span>
                    {movie.production_companies.length > 0
                        ? movie.production_companies.map(c => c.name).join(', ')
                        : 'No production companies'}
                </span>
            </li>
            <li>
                <strong>Status:</strong>
                <span>{movie.status || 'No status'}</span>
            </li>
            <li className="flex items-center">
                <strong>Rating:</strong>
                <span><MovieRating voteAverage={movie.vote_average} voteCount={movie.vote_count}/></span>
            </li>
            <li>
                <strong>Home page</strong>
                <span><Link to={movie.homepage}>{movie.homepage || 'No homepage'}</Link></span>
            </li>

        </ul>
    );
};

export default MovieInfoList;