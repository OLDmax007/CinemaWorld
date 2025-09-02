import {type FC} from "react";
import type {GenreType} from "@models/GenreType.ts";
import type {GenresProps} from "./Genres.tsx";
import {genreBadgeStyles} from "./styles/genreBadge.styles.ts";
import GenreIcon from "./GenreIcon.tsx";
import {Link} from "react-router-dom";
import styles from './genrse.module.css'

export type GenreBadgeProps = Pick<GenresProps, 'variant' | 'size'> & {
    genre: GenreType;
    isActive: boolean
};

const GenreBadge: FC<GenreBadgeProps> = ({genre, variant, size, isActive}) => {
    return (
        <li>
            <Link
                onClick={() => {
                    const element = document.getElementById('movies-section');
                    if (element) element.scrollIntoView({behavior: 'smooth'});
                }}
                className={`${styles.genreBadge} ${genreBadgeStyles({variant})} ${(isActive) && styles.genreBadgeActive}`}
                to={`/genre/${genre.slugName}/${genre.id}`}>
                <span>{genre.name}</span>
                <span><GenreIcon size={size} genre={genre}/></span>
                </Link>
        </li>
    );
};

export default GenreBadge;