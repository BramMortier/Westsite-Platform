import { Button } from "@components";
import "./pagination.scss";

const Pagination = ({ items, itemsPerPage, maxVisiblePageNumbers, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePageNumbers / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePageNumbers - 1);

        if (endPage - startPage < maxVisiblePageNumbers - 1) {
            startPage = Math.max(1, endPage - maxVisiblePageNumbers + 1);
        }

        for (let page = startPage; page <= endPage; page++) {
            pageNumbers.push(
                <li
                    key={page}
                    className={`pagination__page-number ${page === currentPage ? "pagination__page-number--active" : ""}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </li>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <Button type="secondary" onClick={handlePrevPage}>
                <img src="/icons/arrow-left-light.svg" alt="arrow icon" />
                Vorige
            </Button>
            <ul className="pagination__page-numbers">{renderPageNumbers()}</ul>
            <Button type="secondary" onClick={handleNextPage}>
                Volgende
                <img src="/icons/arrow-right-light.svg" alt="arrow icon" />
            </Button>
        </div>
    );
};

// TODO Add a jump to page input

export default Pagination;
