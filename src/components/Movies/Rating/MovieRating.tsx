import type {FC} from "react";
import StarsRating from "../Rating/StarsRating/StarsRating";
import StarIcon from './StarsRating/star.svg?react'

type MovieRatingProps = {
    voteAverage: number;
    voteCount: number;
};

const MovieRating: FC<MovieRatingProps> = ({voteAverage, voteCount}) => {
    return (
        <div className="flex gap-2 items-center whitespace-nowrap">
            <StarsRating
                icon={StarIcon}
                count={10}
                defaultRating={Math.round(voteAverage)}
            />
            <span className="text-sm text-yellow-500">
        {voteAverage.toFixed(1)}/{voteCount} votes
      </span>
        </div>
    );
};

export default MovieRating;
