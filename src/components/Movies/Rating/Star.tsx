import styles from "./star.module.css";
import type {FC} from "react";
import type {StarsRatingType} from "./StarsRating.tsx";

type StarType = Omit<StarsRatingType, 'count' | 'defaultRating' | 'icon'> & {
    star: string
    isActive: boolean
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}


const Star: FC<StarType> = ({onMouseEnter, onMouseLeave, star, iconSize, unselectedColor, selectedColor, isActive}) => {
    return (
        <span
            className={styles.star}
            style={{
                fontSize: iconSize,
                color: isActive ? selectedColor : unselectedColor,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {star}
        </span>
    );
};

export default Star;