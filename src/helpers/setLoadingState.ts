import type {movieSliceStateType} from "../redux/slices/movieSlice/movieSliceState.ts";
import {movieThunks} from "../redux/slices/movieSlice/movieThunks.ts";

export const setLoadingState = (state: movieSliceStateType, actionType: string, flag: boolean) => {
    type ThunkKey = keyof typeof movieThunks;

    const loadingMap: Record<ThunkKey, keyof movieSliceStateType['loadingStates']> = {
        loadMovies: "isLoadingMovies",
        loadMovieById: "isLoadingMovie",
        loadMoviesByQuery: "isLoadingMovies",
        loadGenres: "isLoadingGenres",
    }
    for (const [key, value] of Object.entries(loadingMap) as [ThunkKey, keyof movieSliceStateType['loadingStates']][]) {
        if (actionType.startsWith(movieThunks[key].typePrefix)) {
            state.loadingStates[value] = flag
            break;
        }
    }
}