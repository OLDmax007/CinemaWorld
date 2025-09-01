import {useSearchParams} from "react-router-dom";
import type {TMDBResQueryType} from "@models/TMDBResponseType.ts";

export const useAppPagination = (queryMeta: TMDBResQueryType | null) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || queryMeta?.page || 1;
    const totalPages =  queryMeta && queryMeta?.total_pages < 500 ?  queryMeta?.total_pages : 500
    return {searchParams,  setSearchParams, currentPage, totalPages}
}