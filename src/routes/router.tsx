import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";


export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: ':genreName/:genreId', element: <MoviesPage /> }
        ]
    }])