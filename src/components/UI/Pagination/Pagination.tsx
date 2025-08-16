import type {FC} from "react";
import {useSearchParams} from "react-router-dom";
import type {TMDBResQueryType} from "../../../models/TMDBResponseType.ts";
import styles from "./pagination.module.css";

type PaginationProps = {
    queryMeta: TMDBResQueryType | null
}

const Pagination: FC<PaginationProps> = ({queryMeta}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || queryMeta?.page || 1;
    const totalPages =  queryMeta && queryMeta?.total_pages < 500 ?  queryMeta?.total_pages : 500

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
    };

    return (
        <nav className={styles.pagination}>
            <button
                className={styles.pageButton}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(1)}
            >
                First
            </button>
            <button
                className={styles.pageButton}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                &lt;
            </button>
            <span className={styles.currentPage}>{currentPage} / {totalPages}</span>
            <button
                className={styles.pageButton}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                &gt;
            </button>
            <button
                className={styles.pageButton}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(totalPages)}
            >
                Last
            </button>
        </nav>
    );
};

export default Pagination