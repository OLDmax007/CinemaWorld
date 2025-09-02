import MoviesListCard from "./MoviesListCard.tsx";
import type {FC} from "react";
import {type MoviesListSectionProps} from "./MoviesListSection.tsx";

export type MoviesListItemsProps = Pick<MoviesListSectionProps, 'movies'>

const MoviesListItems: FC<MoviesListItemsProps> = ({movies}) => {
    return (
        <ul className={`grid w-full gap-1.5 
    [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]
    max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center mt-5!`}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
};

export default MoviesListItems;