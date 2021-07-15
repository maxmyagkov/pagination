import React from 'react'

export const Pagination = React.memo(({ perPage, totalPosts, paginate, currentPage }) => {

    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li
                    className="page-item "
                    onClick={() => paginate(
                        currentPage !== 1
                            ? currentPage - 1
                            : currentPage
                    )}>
                    <a className="page-link" >Назад</a>
                </li>
                {pageNumbers.map((page) => (
                    <li
                        onClick={() => paginate(page)}
                        className={
                            currentPage === page
                                ? "page-item active"
                                : "page-item"} key={page}>
                        <a className="page-link" >{page}</a>
                    </li>
                ))}
                <li
                    className="page-item"
                    onClick={() => paginate(
                        currentPage !== pageNumbers.length
                            ? currentPage + 1
                            : currentPage
                    )}>
                    <a className="page-link">Вперед</a>
                </li>
            </ul>
        </nav>
    )
})
