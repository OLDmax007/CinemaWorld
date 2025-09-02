import MovieInfo from "@components/Movies/MovieInfo/MovieInfo.tsx";
import {Navigate, useParams} from "react-router-dom";

const MoviePage = () => {
    const {movieId, movieName} = useParams<{ movieId: string, movieName: string }>()
    if (!movieId || !movieName) return <Navigate to={'/404'} replace/>

    return (
        <section className={'flex justify-center items-center flex-col gap-8 p-4'}>
            <MovieInfo movieId={movieId} movieName={movieName}/>
        </section>
    );
};


export default MoviePage;