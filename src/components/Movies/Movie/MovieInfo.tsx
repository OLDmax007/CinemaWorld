import Poster from "../Poster/Poster.tsx";
import MovieInfoList from "./MovieInfoList.tsx";
import {movieThunks} from "../../../redux/slices/movieSlice/movieThunks.ts";
import {type FC, useCallback} from "react";
import {useAppThunkData} from "../../../hooks/useAppThunkData.ts";
import {urls} from "../../../constants/urls.ts";
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import RenderStatus from "../../UI/RenderStatus.tsx";
import EmptyMovies from "../../UI/EmptyMovies.tsx";

type MovieInfoProps = {
    movieId: string
    movieName: string
}

const MovieInfo: FC<MovieInfoProps> = ({movieId, movieName}) => {
    const loadMovieCallback = useCallback(() => {
        return movieThunks.loadMovieById(movieId)
    }, [movieId])

    const isLoadingMovie = useAppSelector(state => state.isLoadingMovie)
    const movie = useAppThunkData(loadMovieCallback, (state) => state.movie)


    if (!movie || movie.id.toString() !== movieId || movie.title !== movieName) return <EmptyMovies
        message="Movie not found"/>;


    return (
        <>
            <RenderStatus isLoading={isLoadingMovie}>
                <div>
                    <Poster posterPath={movie?.poster_path}/>
                    <MovieInfoList movie={movie}/>
                </div>
                <video controls poster={movie ? urls.movies.posterUrl + movie.backdrop_path : ''}>
                    <source type="video/mp4"/>
                </video>
            </RenderStatus>
        </>
    );
};

export default MovieInfo;