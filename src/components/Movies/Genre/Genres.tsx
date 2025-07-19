import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import GenreBadge from "./GenreBadge.tsx";

export type GenresProps = {
    genres: GenreType[]
    variant: 'default' | 'filter'
    handleClick?: (genre?: GenreType) => void
}

const Genres:FC<GenresProps> = ({genres,variant, handleClick}) => {
    return (
        <div >
            {genres.map((genre) =>
                <GenreBadge variant={variant} genre={genre} handleClick={handleClick ? () => handleClick(genre) : undefined}/>
            )}
        </div>
    );
};

export default Genres;