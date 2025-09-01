import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@layouts/MainLayout.tsx";
import MoviesPage from "@pages/MoviesPage.tsx";
import ErrorPage from "@pages/ErrorPage.tsx";
import MoviePage from "@pages/MoviePage.tsx";
import MovieSearchPage from "@pages/MovieSearchPage.tsx";
import FiltersLayout from "@layouts/FiltersLayout.tsx";


export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                path: '', element: <FiltersLayout/>, children: [
                    {index: true, element: <MoviesPage/>},
                    {path: '/genre/:genreName/:genreId', element: <MoviesPage/>},
                    {path: '/movie/:movieName/:movieId', element: <MoviePage/>},
                    {path: '/search', element: <MovieSearchPage/>}
                ]
            },
        ]
    }])

