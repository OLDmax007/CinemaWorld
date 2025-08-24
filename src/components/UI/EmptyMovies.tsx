import LinkHome from "./LinkHome.tsx";
import type {FC} from "react";

type EmptyMoviesProps = {
    message: string
}

const EmptyMovies:FC<EmptyMoviesProps> = ({message}) => {
    return (
        <div className={'flex justify-center items-center min-h-screen flex-col'}>
            <h2>{message}</h2>
            <LinkHome/>
        </div>
    );
};

export default EmptyMovies;