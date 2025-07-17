import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";

type GenreBadgeProps = {
    genre: GenreType;
};

const GenreBadge: FC<GenreBadgeProps> = ({genre}) => {
    console.log(genre)
    return (
        <div>
        </div>
    );
};

export default GenreBadge;