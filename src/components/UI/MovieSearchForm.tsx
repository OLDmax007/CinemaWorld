import {useForm} from "react-hook-form";
import {movieThunks} from "../../redux/slices/movieSlice/movieThunks.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {movieValidator} from "../../validators/movieValidator.ts";

type FormDataProps = {
    movieName: string
};

const MovieSearchForm = () => {

    const dispatch = useAppDispatch();
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<FormDataProps>({resolver: joiResolver(movieValidator), mode: 'onSubmit'});

    console.log(errors.movieName?.message)
    const handleSearchSubmit = (data: FormDataProps) => {
        dispatch(movieThunks.loadMoviesByQuery(data.movieName));
    };

    return (
        <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <div className="bg-white p-4 rounded-lg">
                <div className="relative bg-inherit">
                    <label htmlFor="movieName"
                           className="absolute cursor-text left-0 -top-3 text-sm text-gray-600 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type
                        inside me</label>
                    <input type="text" id="movieName" autoComplete="on" autoFocus
                           className="peer bg-transparent h-10 w-72 rounded-lg text-gray-600 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                           placeholder="Type inside me"
                           {...register('movieName')}
                    />
                </div>
            </div>
            {errors && <div>{errors.movieName?.message}</div>}
            <button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" disabled={!isValid}>
                Search
            </button>
        </form>
    );
};

export default MovieSearchForm;