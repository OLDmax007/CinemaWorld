import Poster from "@components/Movies/Poster/Poster.tsx";
import MovieInfoList from "./MovieInfoList.tsx";
import {movieThunks} from "@redux/slices/movieSlice/movieThunks.ts";
import {type FC, useCallback} from "react";
import {useAppThunkData} from "@hooks/useAppThunkData.ts";
import {urls} from "@constants/urls.ts";
import {useAppSelector} from "@hooks/useAppSelector.ts";
import LoadingWrapper from "@components/UI/LoadingWrapper.tsx";
import EmptyMovies from "@components/UI/EmptyMovies.tsx";
import NoImage from '@assets/images/no-image.png'

type MovieInfoProps = {
    movieId: string
    movieName: string
}

const MovieInfo: FC<MovieInfoProps> = ({movieId, movieName}) => {
    const loadMovieCallback = useCallback(() => {
        return movieThunks.loadMovieById(movieId)
    }, [movieId])

    const isLoadingMovie = useAppSelector(state => state.loadingStates.isLoadingMovie)
    const movie = useAppThunkData(loadMovieCallback, (state) => state.movie)

    if (isLoadingMovie) return <LoadingWrapper/>

    if (!movie || movie?.id.toString() !== movieId || movie?.slugTitle !== movieName) return <EmptyMovies
        message="Movie not found"/>;

    return (
        <>
            <div
                className={'flex flex-wrap gap-8 w-full max-w-[1000px] justify-center items-center md:flex-row sm:flex-col'}>
                    <Poster posterPath={movie?.poster_path}/>
                    <MovieInfoList movie={movie}/>
                </div>
            <video className={'w-full max-w-[1000px] aspect-video rounded-xl mx-auto sm:w-[800px]'} controls
                   poster={movie?.backdrop_path ? urls.movies.posterUrl + movie.backdrop_path : NoImage}>
                    <source type="video/mp4"/>
                </video>
        </>
    );
};

export default MovieInfo;