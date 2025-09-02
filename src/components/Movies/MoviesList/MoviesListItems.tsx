import MoviesListCard from "./MoviesListCard.tsx";
import type {FC} from "react";
import {type MoviesListSectionProps} from "./MoviesListSection.tsx";

export type MoviesListItemsProps = Pick<MoviesListSectionProps, 'movies'>

const MoviesListItems: FC<MoviesListItemsProps> = ({movies}) => {
    return (
        <ul className={`grid w-full gap-5 
    [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]
    max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center mt-5!`}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
};

export default MoviesListItems;