import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import {getGenreIcon} from "../../../helpers/getGenreIcon.tsx";
import {genreBadgeStyles} from "./styles/genreBadge.styles.ts";
import {genreNameStyles} from "./styles/genreName.styles.ts";
import {genreIconStyles} from "./styles/genreIcon.styles.ts";
import type {GenresProps} from "./Genres.tsx";
import {Link} from "react-router-dom";

type GenreBadgeProps = Pick<GenresProps, 'variant' | 'handleClick'> & {
    genre: GenreType;
};

const GenreBadge: FC<GenreBadgeProps> = ({genre, variant, handleClick}) => {
    const Icon = getGenreIcon(genre)
    const content =
        <div className={genreBadgeStyles({variant})}>
            <span className={genreNameStyles({variant})}>{genre.name}</span>
            <span><Icon className={genreIconStyles({variant})}/></span>
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