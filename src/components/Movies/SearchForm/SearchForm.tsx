import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {movieValidator} from "@/validators/movieValidator.ts";
import {useEffect} from "react";
import type {MovieSearchFormDataType} from "@models/MovieSearchFormDataType.ts";
import {useNavigate} from "react-router-dom";
import {movieThunks} from "@redux/slices/movieSlice/movieThunks.ts";
import {useAppDispatch} from "@hooks/useAppDispatch.ts";
import {useAppQueryParams} from "@hooks/useAppQueryParams.ts";

const SearchForm = () => {
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
        reset
    } = useForm<MovieSearchFormDataType>({resolver: joiResolver(movieValidator), mode: 'all'});


    const dispatch = useAppDispatch()
    const {page, query} = useAppQueryParams()

    useEffect(() => {
        if (query) {
            dispatch(movieThunks.loadMoviesByQuery({query, page}));
        }
    }, [dispatch, query, page]);
    const handleSearchSubmit = (data: MovieSearchFormDataType) => {
        navigate(`/search/?query=${data.movieName}`);
        reset()
    };
    return (
        <form className={'flex-col w-full'} onSubmit={handleSubmit(handleSearchSubmit)}>
            <div className={'w-full flex flex-col justify-center items-center gap-2 mb-6!'}>
                <span className={'text-red-500 italic'}>{errors.movieName && errors.movieName.message}</span>
                <label className={'sr-only'} htmlFor="movieName">Search movies</label>
                <input className={'w-65  max-[300px]:w-50 h-10 !pl-2 !pr-2 text-base border-2 border-gray-300 rounded-md'}
                       type="text" id="movieName" autoComplete="on" autoFocus
                           placeholder="Search movies"
                           {...register('movieName')}
                    />
                <button
                    type={"submit"}
                    className={'w-65 max-[300px]:w-50  !pt-2 !pb-2'}
                    disabled={!isValid}>
                    Search
                </button>
                </div>
        </form>
    );
};

export default SearchForm;
