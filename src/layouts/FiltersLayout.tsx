import {useAppThunkData} from "@hooks/useAppThunkData.ts";
import {movieThunks} from "@redux/slices/movieSlice/movieThunks.ts";
import Genres from "@components/Movies/Genre/Genres.tsx";
import SearchForm from "@components/Movies/SearchForm/SearchForm.tsx";
import {Outlet, useParams} from "react-router-dom";
import EmptyMovies from "@components/UI/EmptyMovies.tsx";
import {useAppSelector} from "@hooks/useAppSelector.ts";
import LoadingWrapper from "@components/UI/LoadingWrapper.tsx";
import type {GenreType} from "@models/GenreType.ts";

const FiltersLayout = () => {
    const genres = useAppThunkData(movieThunks.loadGenres, (state) => state.genres)
    const isLoadingGenres = useAppSelector(state => state.loadingStates.isLoadingGenres)
    const {genreName, genreId} = useParams<{ genreName: string, genreId: string }>()

    if (isLoadingGenres || !genres) return <LoadingWrapper/>;

    if (
        genres &&
        genreId &&
        genreName &&
        !genres.some((g: GenreType) => g.id === Number(genreId) && g.slugName === genreName)
    ) {
        return <EmptyMovies message="Movies not found"/>;
    }

    return (
        <>
            <section className={'grid grid-cols-[5fr_3fr] w-full !px-[50px] max-[800px]:grid-cols-1'}>
                <Genres genres={genres} variant={'default'} size={'medium'}/>
                <SearchForm/>
            </section>
            <Outlet/>
        </>

    );
};


export default FiltersLayout;