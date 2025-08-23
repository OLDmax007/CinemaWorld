import MovieInfo from "../components/Movies/Movie/MovieInfo.tsx";
import styles from '../components/Movies/Movie/movie-info.module.css'
import {Navigate, useParams} from "react-router-dom";

const MoviePage = () => {
    const {movieId, movieName} = useParams<{ movieId: string, movieName: string }>()
    if (!movieId || !movieName) return <Navigate to={'/404'} replace/>

    return (
        <section className={styles.movieInfoSection}>
            <MovieInfo movieId={movieId} movieName={movieName}/>
        </section>
    );
};


export default MoviePage;