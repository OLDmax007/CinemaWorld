import LinkHome from "./LinkHome.tsx";
import type {FC} from "react";

type EmptyMoviesProps = {
    message: string
}

const EmptyMovies:FC<EmptyMoviesProps> = ({message}) => {
    return (
        <div className={'flex h-full w-full flex-col justify-center items-center'}>
            <h2>{message}</h2>
            <LinkHome/>
        </div>
    );
};

export default EmptyMovies;