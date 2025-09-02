import {type FC, useState} from "react";
import Star from "./Star.tsx";

export type StarsRatingType = {
    icon: FC<{ className: string }>
    count: number
    defaultRating: number
}

const StarsRating: FC<StarsRatingType> = ({icon, count, defaultRating}) => {
    const stars: FC<{ className: string }>[] = new Array(count).fill(icon);
    const [temporaryRating, setTemporaryRating] = useState<number | null>(null);
    return (
        <div className={'flex'}>
            {stars.map((star, index) => {
                const isActive = temporaryRating !== null
                    ? index < temporaryRating
                    : index < defaultRating;
                return (
                    <Star key={index} icon={star}
                          isActive={isActive}
                          onMouseEnter={() => setTemporaryRating(index + 1)}
                          onMouseLeave={() => setTemporaryRating(null)}/>

                );
            })}
        </div>
    );
};

export default StarsRating;
