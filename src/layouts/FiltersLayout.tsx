import {useAppThunkData} from "../hooks/useAppThunkData.ts";
import {movieThunks} from "../redux/slices/movieSlice/movieThunks.ts";
import {useAppPageParam} from "../hooks/useAppPageParam.ts";
import Genres from "../components/Movies/Genre/Genres.tsx";
import SearchForm from "../components/UI/SearchForm/SearchForm.tsx";
import {Outlet, useParams} from "react-router-dom";
import EmptyMovies from "../components/UI/EmptyMovies.tsx";

const FiltersLayout = () => {
    const genres = useAppThunkData(movieThunks.loadGenres, (state) => state.genres)
    const page = useAppPageParam()
    const {genreName, genreId} = useParams<{ genreName: string, genreId: string }>()
    if (
        genres &&
        genreId &&
        genreName &&
        !genres.some((g) => g.id === Number(genreId) && g.name === genreName && g.id !== 0)
    ) {
        return <EmptyMovies message="Movies not found"/>;
    }


    return (
        <>
            {
                genres &&
                <>
                    <section className={'movies-filters-section'}>
                        <Genres genres={genres} variant={'default'} size={'medium'}/>
                        <SearchForm page={page}/>
                    </section>
                    <Outlet/>
                </>

            }
        </>
    );
};


export default FiltersLayout;