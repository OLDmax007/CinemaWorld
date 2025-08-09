import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";


export const  router = createBrowserRouter([
    {path: '', element: <MainLayout/>, errorElement: <ErrorPage/>,children: [
            {index: true, element: <HomePage/>},
            {path: '/movies', element: <MoviesPage/>},
            {path: '/movies/:genreName', element: <MoviesPage/>}
        ]},
])