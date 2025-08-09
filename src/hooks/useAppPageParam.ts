import {useSearchParams} from "react-router-dom";

export const useAppPageParam = () => {
    const [searchParams] = useSearchParams();
    return searchParams.get('page') || '1';
};
