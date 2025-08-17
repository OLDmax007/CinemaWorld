import styles from "./star.module.css";
import {type FC} from "react";
import type {StarsRatingType} from "./StarsRating.tsx";

type StarType = Omit<StarsRatingType, 'count' | 'defaultRating' | 'icon'> & {
    icon: FC<{ className: string }>
    isActive: boolean
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}


const Star: FC<StarType> = ({onMouseEnter, onMouseLeave, icon: Icon, isActive}) => {
    return (
        <span
            className={styles.starWrapper}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Icon className={`${styles.star} ${isActive ? styles.starActive : styles.starNoActive}`}/>
        </span>
    );
};

export default Star;