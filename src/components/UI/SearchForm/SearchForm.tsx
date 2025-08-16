import {useForm} from "react-hook-form";
import {movieThunks} from "../../../redux/slices/movieSlice/movieThunks.ts";
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {movieValidator} from "../../../validators/movieValidator.ts";
import type {FC} from "react";
import type {MovieSearchFormDataType} from "../../../models/MovieSearchFormDataType.ts";
import styles from './search-form.module.css'


type MovieSearchFormProps = {
    page: string
}

const SearchForm: FC<MovieSearchFormProps> = ({page}) => {
    const dispatch = useAppDispatch();
    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<MovieSearchFormDataType>({resolver: joiResolver(movieValidator), mode: 'all'});
    const handleSearchSubmit = (data: MovieSearchFormDataType) => {
        dispatch(movieThunks.loadMoviesByQuery({query: data.movieName, page}));
    };

    return (
        <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <div className={`${styles.formWrapper } form-wrapper-adaptive`}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="movieName">Search movies</label>
                    <input type="text" id="movieName" autoComplete="on" autoFocus
                           placeholder="Search movies"
                           {...register('movieName')}
                    />
                </div>
                <button
                    className={styles.formButton}
                    disabled={!isValid}>
                    Search
                </button>
            </div>
            <div className={styles.errorContainer}>{errors.movieName && errors.movieName.message}</div>
        </form>
    );
};

export default SearchForm;