import {type FC, useState} from "react";
import noImage from '@assets/images/no-image.png';
import {urls} from "@constants/urls.ts";
import styles from './poster.module.css'
import {Atom} from "react-loading-indicators";

type PosterProps = {
    posterPath: string | null
}

const Poster: FC<PosterProps> = ({posterPath}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const Loading = <div className={'h-full flex justify-center items-center'}>
        <Atom color="#dfdccc" size="large" text="" textColor="#ff00f8"/>
    </div>

    return (
        <div
            className={`${styles.posterWrapper} w-[250px] h-[375px] max-[300px]:w-[150px] max-[300px]:h-[200px] 
            rounded-[12px] overflow-hidden border-[3px] border-white/12`}>
            {isLoading && Loading}
            <img
                onLoad={() => setIsLoading(false)}
                className={'w-full h-full object-cover'}
                src={posterPath ? urls.movies.posterUrl + posterPath : noImage}
                alt="Poster"/>
        </div>
    );
};

export default Poster;