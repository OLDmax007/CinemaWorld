import type {FC} from "react";
import type {GenreType} from "@models/GenreType.ts";
import GenreBadge from "./GenreBadge.tsx";
import {useParams} from "react-router-dom";


export type GenresProps = {
    genres: GenreType[]
    variant: 'default' | 'filter'
    size: 'small' | 'medium'
}

const Genres: FC<GenresProps> = ({genres, variant, size}) => {
    const {genreName} = useParams<{ genreName: string }>()
    if (!genres.length || !genres) return <span>No genres</span>

    return (
        <section>
            <ul className={'grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-center items-center gap-2 w-full my-6!'}>{genres.map((genre) =>
                <GenreBadge key={genre.id} variant={variant} size={size} genre={genre}
                            isActive={genre.slugName === genreName}/>
            )}
            </ul>
        </section>
    );
};

export default Genres;