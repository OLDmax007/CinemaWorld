import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import GenreBadge from "./GenreBadge.tsx";

export type GenresProps = {
    genres: GenreType[]
    variant: 'default' | 'filter'
    handleClick?: (genreId: number) => void;
}

const Genres:FC<GenresProps> = ({genres,variant, handleClick}) => {
    return (
        <div>
            {genres.map((genre, index) =>
                <GenreBadge key={index} variant={variant} genre={genre}  handleClick={handleClick ? () => handleClick(genre.id) : undefined}/>
            )}
        </div>
    );
};

export default Genres;