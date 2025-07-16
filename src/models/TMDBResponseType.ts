import type {MovieType} from "./MovieType.ts";

export type TMDBResDataType =  { results: MovieType[] }

export type TMDBResQueryType = {
    page: number
    total_pages: number,
    total_results: number
}