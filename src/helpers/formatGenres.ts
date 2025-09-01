import type {GenreType} from "@models/GenreType.ts";
import {kebabCase} from "lodash";

export const formatGenres = (genres: GenreType[]): GenreType[] => {
    return genres.map((genre) => ({...genre, slugName: kebabCase(genre.name)}))
}