import {type FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import {genreIconStyles} from "./styles/genreIcon.styles.ts";
import type {GenresProps} from "./Genres.tsx";
import {genreBadgeStyles} from "./styles/genreBadge.styles.ts";
import {genreNameStyles} from "./styles/genreName.styles.ts";
import GenreIcon from "./GenreIcon.tsx";
import {Link} from "react-router-dom";

export type GenreBadgeProps = Pick<GenresProps, 'variant'> & {
    genre: GenreType;
};

const GenreBadge: FC<GenreBadgeProps> = ({genre, variant}) => {

    const content =
        <div className={genreBadgeStyles({variant})}>
            <span className={genreNameStyles({variant})}>{genre.name}</span>
            <span><GenreIcon className={genreIconStyles({variant})} genre={genre}/></span>
        </div>
    return (
        <>

            {variant === 'filter' ? (
                <Link to={genre.id === 0 ? '/movies' : `/${genre.name}/${genre.id}`}>
                    {content}
                </Link>
            ) : (
                content
            )}
        </>
    );
};

export default GenreBadge;