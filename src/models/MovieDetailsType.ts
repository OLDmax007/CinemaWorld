import type {GenreType} from "./GenreType.ts";
import type {MovieType} from "./MovieType.ts";

export type MovieDetailsType  = MovieType & {
    belongs_to_collection: MovieDetailsTypeBelongs_to_collection;
    budget: number;
    genres: GenreType[];
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    production_companies: MovieDetailsTypeProduction_companies[];
    production_countries: MovieDetailsTypeProduction_countries[];
    revenue: number;
    runtime: number;
    spoken_languages: MovieDetailsTypeSpoken_languages[];
    status: string;
    tagline: string;
}
export type MovieDetailsTypeBelongs_to_collection = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export type MovieDetailsTypeProduction_companies = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
export type MovieDetailsTypeProduction_countries = {
    iso_3166_1: string;
    name: string;
}
export type MovieDetailsTypeSpoken_languages = {
    english_name: string;
    iso_639_1: string;
    name: string;
}