import type {FC} from "react";
import type {MovieType} from "../../../models/MovieType.ts";
import styles from './movie-info.module.css'
import StarsRating from "../Rating/StarsRating.tsx";
import StarIcon from '../Rating/star.svg?react'
import Genres from "../Genre/Genres.tsx";

type MovieInfoListProps = {
    movie: MovieType;
};
const MovieInfoList: FC<MovieInfoListProps> = ({movie}) => {
    return (
        <ul className={styles.movieInfoList}>

            <li><strong>Title:</strong> {movie.title}</li>
            <li><strong>Tagline:</strong> {movie.tagline}</li>
            <li><strong>Overview:</strong> {movie.overview}</li>
            <li><strong>Release date:</strong> {movie.release_date}</li>
            <li><strong>Runtime:</strong> {movie.runtime} min</li><li>
                <strong>Genres:</strong>
                <Genres genres={movie.genres} variant={'filter'} size={'small'}/>
            </li>
            <li>
                <strong>Languages:</strong> {movie.spoken_languages.map((lang) => lang.english_name).join(", ")}
            </li>
            <li>
                <strong>Production Companies:</strong> {movie.production_companies.map((company) => company.name).join(", ")}
            </li>
            <li><strong>Status:</strong> {movie.status}</li>
            <li className={'flex'}>
                <strong>Rating:</strong>
                <div className={'flex items-center'}>
                    <StarsRating
                        icon={StarIcon}
                        count={10}
                        defaultRating={Math.round(movie.vote_average)}
                    />
                    <span style={{fontSize: "0.875rem", color: "#eab308", marginLeft: "8px"}}>
                        {movie.vote_average.toFixed(1)}/{movie.vote_count} votes</span>
                </div>
            </li>
            {movie.homepage && (
                <li>
                    <strong>Homepage:</strong>{" "}
                    <a href={movie.homepage} target="_blank" rel="noreferrer">
                        {movie.homepage.includes("netflix") ? "Netflix" : movie.homepage}
                    </a>
                </li>
            )}
        </ul>
    );
};

export default MovieInfoList;