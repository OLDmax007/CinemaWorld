import type {FC, ReactNode} from "react";
import styles from './pagination.module.css'

type PaginationButtonProps = {
    currentPage: number;
    targetPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    children: ReactNode;
};

const PaginationButton: FC<PaginationButtonProps> = ({currentPage, targetPage, totalPages, onPageChange, children}) => {

    const isDisabled = targetPage < 1 || targetPage > totalPages || targetPage === currentPage;
    if (totalPages === 1 && targetPage === 1) return null;

    return (
        <button
            type={"button"}
            className={styles.pageButton}
            disabled={isDisabled}
            onClick={() => onPageChange(currentPage)}
        >
            {children}
        </button>
    )
};

export default PaginationButton