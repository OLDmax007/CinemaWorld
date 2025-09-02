import type {FC} from "react";
import styles from './pagination.module.css'

type PageNumButtonsProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const PageNumButtons: FC<PageNumButtonsProps> = ({currentPage, totalPages, onPageChange}) => {
    const maxButtons = 4;
    const start = Math.max(2, Math.min(currentPage - Math.floor(maxButtons / 2), totalPages - maxButtons));

    return (
        <>
            {Array.from({length: Math.min(maxButtons, totalPages - 2)}, (_, i) => {
                const page = start + i;
                return (
                    <button
                        key={page}
                        type={"button"}
                        className={page === currentPage ? styles.currentPage : styles.pageButton}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                );
            })}
        </>
    );
};

export default PageNumButtons;
