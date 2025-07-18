import type {GenreType} from "../models/GenreType.ts";
import type {ReactNode} from "react";
import TankIcon from '../assets/icons/tank.svg';
import AdventureMapIcon from '../assets/icons/adventure-map.svg';
import TvMovieIcon from '../assets/icons/tv-movie.svg';
import BrokenHeartIcon from '../assets/icons/broken-heart.svg';
import ClownHatIcon from '../assets/icons/clown-hat.svg';
import ClueIcon from '../assets/icons/clue.svg';
import CowboyHatIcon from '../assets/icons/cowboy-hat.svg';
import DetectiveIcon from '../assets/icons/detective.svg';
import DragonIcon from '../assets/icons/dragon.svg';
import FamilyIcon from '../assets/icons/family.svg';
import GraveIcon from '../assets/icons/grave.svg';
import GunIcon from '../assets/icons/gun.svg';
import HistoryIcon from '../assets/icons/history.svg';
import KnifeIcon from '../assets/icons/knife.svg';
import MusicIcon from '../assets/icons/music.svg';
import PencilIcon from '../assets/icons/pencil.svg';
import RomanceIcon from '../assets/icons/romance.svg';
import AlienIcon from '../assets/icons/alien.svg';


export const getGenreIcon = (genre: GenreType): ReactNode => {
    switch (genre.id || genre.name) {
        case 28:
        case "Action":
            return <GunIcon/>;
        case 12:
        case "Adventure":
            return <AdventureMapIcon/>;
        case 16:
        case "Animation":
            return <PencilIcon/>;
        case 35:
        case "Comedy":
            return <ClownHatIcon/>;
        case 80:
        case "Crime":
            return <DetectiveIcon/>;
        case 99:
        case "Documentary":
            return <PencilIcon/>;
        case 18:
        case "Drama":
            return <BrokenHeartIcon/>;
        case 10751:
        case "Family":
            return <FamilyIcon/>;
        case 14:
        case "Fantasy":
            return <DragonIcon/>;
        case 36:
        case "History":
            return <HistoryIcon/>;
        case 27:
        case "Horror":
            return <GraveIcon/>;
        case 10402:
        case "Music":
            return <MusicIcon/>;
        case 9648:
        case "Mystery":
            return <ClueIcon/>;
        case 10749:
        case "Romance":
            return <RomanceIcon/>;
        case 878:
        case "Science Fiction":
            return <AlienIcon/>;
        case 10770:
        case "TV Movie":
            return <TvMovieIcon/>;
        case 53:
        case "Thriller":
            return <KnifeIcon/>;
        case 10752:
        case "War":
            return <TankIcon/>;
        case 37:
        case "Western":
            return <CowboyHatIcon/>;
    }
};
