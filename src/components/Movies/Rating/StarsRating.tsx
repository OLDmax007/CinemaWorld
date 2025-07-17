import {type FC, useState} from "react";
import Star from "./Star.tsx";

export type StarsRatingType = {
    icon: string
    iconSize: string
    unselectedColor: string
    selectedColor: string
    count: number
    defaultRating: number
}

const StarsRating: FC<StarsRatingType> = ({
                                            icon,
                                            iconSize,
                                            unselectedColor,
                                            selectedColor,
                                            count,
                                            defaultRating
                                        }) => {
    const stars: string[] = new Array(count).fill(icon);
    const [temporaryRating, setTemporaryRating] = useState<number | null>(null);

    return (
        <div>
            {stars.map((star, index) => {
                const isActive = temporaryRating !== null
                    ? index < temporaryRating
                    : index < defaultRating;

                return (
                    <Star key={index} star={star} iconSize={iconSize} unselectedColor={unselectedColor}
                          selectedColor={selectedColor} isActive={isActive}
                          onMouseEnter={() => setTemporaryRating(index + 1)}
                          onMouseLeave={() => setTemporaryRating(null)}/>

                );
            })}
        </div>
    );
};

export default StarsRating;
