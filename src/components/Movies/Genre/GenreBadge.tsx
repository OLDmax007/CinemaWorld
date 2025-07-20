import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import {genreIconStyles} from "./styles/genreIcon.styles.ts";
import type {GenresProps} from "./Genres.tsx";
import {Link} from "react-router-dom";
import {genreBadgeStyles} from "./styles/genreBadge.styles.ts";
import {genreNameStyles} from "./styles/genreName.styles.ts";
import {GenreIcon} from "./GenreIcon.tsx";

export type GenreBadgeProps = Pick<GenresProps, 'variant' | 'handleClick'> & {
    genre: GenreType;
};

const GenreBadge: FC<GenreBadgeProps> = ({genre, variant, handleClick}) => {

    const content =
        <div className={genreBadgeStyles({variant})}>
            <span className={genreNameStyles({variant})}>{genre.name}</span>
            <span><GenreIcon className={genreIconStyles({variant})} genre={genre}/></span>
        </div>


    return (
        <>
            {handleClick ? (
                <Link to={`genres/${genre.name}`} onClick={() => handleClick?.(genre)}>
                    {content}
                </Link>
            ) : (
                content
            )}
        </>
    );
};

export default GenreBadge;