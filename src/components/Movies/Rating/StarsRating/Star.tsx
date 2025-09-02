import {type FC} from "react";
import type {StarsRatingType} from "./StarsRating.tsx";

type StarType = Pick<StarsRatingType, 'icon'> & {
    isActive: boolean
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Star: FC<StarType> = ({onMouseEnter, onMouseLeave, icon: Icon, isActive}) => {
    return (
        <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Icon className={`cursor-pointer transition-all duration-100 ease-linear w-3 h-3 hover:scale-150 ${
                isActive ? "stroke-[goldenrod] fill-[gold]" : "fill-gray-500 stroke-gray-600"}`}/>
        </span>
    );
};

export default Star;