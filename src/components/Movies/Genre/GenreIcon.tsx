import {type FC} from "react";
import {type GenreBadgeProps} from "./GenreBadge.tsx";
import sprite from '@assets/sprite.svg'
import {genreIconStyles} from "./styles/genreIcon.styles.ts";

type GenreIconProps = {} & Pick<GenreBadgeProps, 'genre' | 'size'>

const GenreIcon: FC<GenreIconProps> = ({genre: {slugName}, size}) => {
    return (
        <svg className={`${genreIconStyles({size})}`}>
            <use xlinkHref={`${sprite}#${slugName}`}/>
        </svg>
    )


};

export default GenreIcon