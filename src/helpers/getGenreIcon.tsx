import type {GenreType} from "../models/GenreType.ts";
import type {FC} from "react";
import TankIcon from '../assets/icons/tank.svg?react';
import AdventureMapIcon from '../assets/icons/adventure-map.svg?react';
import TvMovieIcon from '../assets/icons/tv-movie.svg?react';
import BrokenHeartIcon from '../assets/icons/broken-heart.svg?react';
import ClownHatIcon from '../assets/icons/clown-hat.svg?react';
import ClueIcon from '../assets/icons/clue.svg?react';
import CowboyHatIcon from '../assets/icons/cowboy-hat.svg?react';
import DetectiveIcon from '../assets/icons/detective.svg?react';
import DragonIcon from '../assets/icons/dragon.svg?react';
import FamilyIcon from '../assets/icons/family.svg?react';
import GraveIcon from '../assets/icons/grave.svg?react';
import GunIcon from '../assets/icons/gun.svg?react';
import HistoryIcon from '../assets/icons/history.svg?react';
import KnifeIcon from '../assets/icons/knife.svg?react';
import MusicIcon from '../assets/icons/music.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import RomanceIcon from '../assets/icons/romance.svg?react';
import AlienIcon from '../assets/icons/alien.svg?react';

export const getGenreIcon = (genre: GenreType): FC<{ className?: string }> => {
    switch (genre.id || genre.name) {
        case 28:
        case "Action":
            return GunIcon;
        case 12:
        case "Adventure":
            return AdventureMapIcon;
        case 16:
        case "Animation":
            return PencilIcon;
        case 35:
        case "Comedy":
            return ClownHatIcon;
        case 80:
        case "Crime":
            return DetectiveIcon;
        case 99:
        case "Documentary":
            return PencilIcon;
        case 18:
        case "Drama":
            return BrokenHeartIcon;
        case 10751:
        case "Family":
            return FamilyIcon;
        case 14:
        case "Fantasy":
            return DragonIcon;
        case 36:
        case "History":
            return HistoryIcon;
        case 27:
        case "Horror":
            return GraveIcon;
        case 10402:
        case "Music":
            return MusicIcon;
        case 9648:
        case "Mystery":
            return ClueIcon;
        case 10749:
        case "Romance":
            return RomanceIcon;
        case 878:
        case "Science Fiction":
            return AlienIcon;
        case 10770:
        case "TV Movie":
            return TvMovieIcon;
        case 53:
        case "Thriller":
            return KnifeIcon;
        case 10752:
        case "War":
            return TankIcon;
        case 37:
        case "Western":
            return CowboyHatIcon;
        default:
            return CowboyHatIcon
    }
};
