
import type {FC} from "react";
import noImage from '../../../assets/images/no-image.png';
import {urls} from "../../../constants/urls.ts";
import styles from './poster.module.css'


type PosterProps = {
    posterPath: string

}

const Poster: FC<PosterProps> = ({posterPath}) => {
    return (
        <div className={styles.posterWrapper}>
            <img
                className={styles.posterImage}
                src={posterPath ? urls.movies.posterUrl + posterPath : noImage}
                alt="Poster"/>
        </div>
    );
};

export default Poster;