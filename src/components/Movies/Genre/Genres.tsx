import type {FC} from "react";
import type {GenreType} from "../../../models/GenreType.ts";
import GenreBadge from "./GenreBadge.tsx";

type GenresProps = {
    genres: GenreType[]
}

const Genres:FC<GenresProps> = ({genres}) => {
    return (
        <div>
            {genres.map((genre) =>
                <GenreBadge genre={genre}/>
            )}
        </div>
    );
};

export default Genres;