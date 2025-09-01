import {useSearchParams} from "react-router-dom";

export const useAppQueryParams = () => {
    const [searchParams] = useSearchParams();
    return {page: searchParams.get('page') || '1', query: searchParams.get('query') || ''};
};
