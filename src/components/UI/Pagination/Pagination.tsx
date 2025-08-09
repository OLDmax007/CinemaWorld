import type {FC} from "react";
import {useSearchParams} from "react-router-dom";
import type {TMDBResQueryType} from "../../../models/TMDBResponseType.ts";

type PaginationProps = {
    queryMeta: TMDBResQueryType | null
    maxPages: number
}

const Pagination: FC<PaginationProps> = ({queryMeta, maxPages}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || queryMeta?.page || 1;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > maxPages) return
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
    };

    return (
        <div>
            <button onClick={() => handlePageChange(1)}>First page</button>
            <button disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)}>
                &lt;
            </button>
            <span>{currentPage} of {maxPages}</span>
            <button></button>
            <button disabled={currentPage >= maxPages} onClick={() => handlePageChange(currentPage + 1)}>
                &gt;
            </button>
            <button onClick={() => handlePageChange(maxPages)}>
                Last page
            </button>
        </div>
    );
};

export default Pagination