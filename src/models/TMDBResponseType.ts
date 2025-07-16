import type {MovieType} from "./MovieType.ts";

export type TMDBResponseType = {
    page: number
    results: MovieType[]
    total_pages: number,
    total_results: number
}