import type {FC} from "react";
import type {TMDBResQueryType} from "@models//TMDBResponseType.ts";
import PageNumButtons from "./PageNumButtons.tsx";
import {useAppPagination} from "@hooks/useAppPagination.ts";
import PaginationButton from "./PaginationButton.tsx";

type PaginationProps = {
    queryMeta: TMDBResQueryType | null
}

const Pagination: FC<PaginationProps> = ({queryMeta}) => {
    const {currentPage, totalPages, searchParams, setSearchParams} = useAppPagination(queryMeta)

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        setSearchParams(params);
    }

    return (
        <nav className={'flex justify-center items-center gap-2 !my-5  max-[350px]:flex-col max-[350px]:scale-100 max-[500px]:scale-75 '}>

            <PaginationButton targetPage={currentPage - 1} totalPages={totalPages} currentPage={currentPage}
                              onPageChange={() => handlePageChange(currentPage - 1)}>
                &lt;
            </PaginationButton>
            <PaginationButton targetPage={1} totalPages={totalPages} currentPage={currentPage}
                              onPageChange={() => handlePageChange(1)}>
                1
            </PaginationButton>
            <PageNumButtons currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            <PaginationButton targetPage={currentPage + 1} totalPages={totalPages} currentPage={currentPage}
                              onPageChange={() => handlePageChange(totalPages)}>
                {totalPages}
            </PaginationButton>
            <PaginationButton targetPage={totalPages} totalPages={totalPages} currentPage={currentPage}
                              onPageChange={() => handlePageChange(currentPage + 1)}>
                &gt;
            </PaginationButton>

        </nav>
    );
};

export default Pagination
