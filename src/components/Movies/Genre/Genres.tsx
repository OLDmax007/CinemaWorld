import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import GenreBadge from "./GenreBadge.tsx";

export type GenresProps = {
    genres: GenreType[]
    variant: 'default' | 'filter'
}

const Genres:FC<GenresProps> = ({genres,variant}) => {
    const allGenre = { id: 0, name: 'All Movies' };
    const genresWithAll = [allGenre,...genres]

    return (
        <div>
            {genresWithAll.map((genre) =>
                <GenreBadge key={genre.id} variant={variant} genre={genre}/>
            )}
        </div>
    );
};

export default Genres;