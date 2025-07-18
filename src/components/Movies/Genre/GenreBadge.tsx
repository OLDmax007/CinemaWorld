import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import {getGenreIcon} from "../../../helpers/getGenreIcon.tsx";

type GenreBadgeProps = {
    genre: GenreType;
    // variant: 'default' | 'filter'
};

const GenreBadge: FC<GenreBadgeProps> = ({genre}) => {
    const icon = getGenreIcon(genre)
    return (
        <div>
            <span>{genre.name}</span>
            <span>{icon}</span>
        </div>
    );
};

export default GenreBadge;