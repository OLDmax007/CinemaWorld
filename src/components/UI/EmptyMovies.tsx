import styles from "../Movies/MoviesList/movies.module.css";
import LinkHome from "./LinkHome.tsx";
import type {FC} from "react";

type EmptyMoviesProps = {
    message: string
}

const EmptyMovies:FC<EmptyMoviesProps> = ({message}) => {
    return (
        <div className={styles.emptyMovies}>
            <h2>{message}</h2>
            <LinkHome/>
        </div>
    );
};

export default EmptyMovies;