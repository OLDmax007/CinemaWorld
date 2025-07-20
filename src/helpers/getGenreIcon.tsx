import type {GenreType} from "../models/GenreType.ts";
import type {FC} from "react";
import ActionIcon from '../assets/icons/action.svg?react';
import AdventureIcon from '../assets/icons/adventure.svg?react';
import AnimationIcon from '../assets/icons/animation.svg?react';
import ComedyIcon from '../assets/icons/comedy.svg?react';
import CrimeIcon from '../assets/icons/crime.svg?react';
import MusicIcon from '../assets/icons/music.svg?react';
import DramaIcon from '../assets/icons/drama.svg?react';
import FamilyIcon from '../assets/icons/family.svg?react';
import HistoryIcon from '../assets/icons/history.svg?react';
import HorrorIcon from '../assets/icons/horror.svg?react';
import MysteryIcon from '../assets/icons/mystery.svg?react';
import RomanceIcon from '../assets/icons/romance.svg?react';
import ScienceFictionIcon from '../assets/icons/science-fiction.svg?react';
import TvMovieIcon from '../assets/icons/tv-movie.svg?react';
import ThrillerIcon from '../assets/icons/thriller.svg?react';
import WarIcon from '../assets/icons/war.svg?react';
import WesternIcon from '../assets/icons/western.svg?react';
import DocumentaryIcon from '../assets/icons/documentary.svg?react';
import FantasyIcon from '../assets/icons/fantasy.svg?react';
import DefaultIcon from '../assets/icons/default-movie.svg?react';

export const getGenreIcon = (genre: GenreType): FC<{ className?: string }> => {
    switch (genre.name) {
        case "Action": return ActionIcon;
        case "Adventure": return AdventureIcon;
        case "Animation": return AnimationIcon;
        case "Comedy": return ComedyIcon;
        case "Crime": return CrimeIcon;
        case "Documentary": return DocumentaryIcon;
        case "Drama": return DramaIcon;
        case "Family": return FamilyIcon;
        case "Fantasy": return FantasyIcon;
        case "History": return HistoryIcon;
        case "Horror": return HorrorIcon;
        case "Music": return MusicIcon;
        case "Mystery": return MysteryIcon;
        case "Romance": return RomanceIcon;
        case "Science Fiction": return ScienceFictionIcon;
        case "TV Movie": return TvMovieIcon;
        case "Thriller": return ThrillerIcon;
        case "War": return WarIcon;
        case "Western": return WesternIcon;
        default: return DefaultIcon;
    }
};
