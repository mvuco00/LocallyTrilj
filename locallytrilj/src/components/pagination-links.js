import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage =
    currentPage - 1 === 1
      ? "/blog"
      : "/blog/pages/" + (currentPage - 1).toString()
  const nextPage = "/blog/pages/" + (currentPage + 1).toString()

  return (
    <div className="pag-links">
      {/*Prva strelica*/}
      <Pagination aria-label="Page navigation example">
        {isFirst ? (
          <PaginationItem disabled>
            <PaginationLink previous href={prevPage} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink previous href={prevPage} />
          </PaginationItem>
        )}
        {Array.from({ length: numberOfPages }, (_, index) =>
          currentPage === index + 1 ? (
            <PaginationItem active key={`page-number${index + 1}`}>
              <PaginationLink
                href={`${index === 0 ? "/blog" : "/blog/pages/" + (index + 1)}`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={`page-number${index + 1}`}>
              <PaginationLink
                href={`${index === 0 ? "/blog" : "/blog/pages/" + (index + 1)}`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        {/*Zadnja strelica*/}
        {isLast ? (
          <PaginationItem disabled>
            <PaginationLink next href={nextPage} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink next href={nextPage} />
          </PaginationItem>
        )}
      </Pagination>
    </div>
  )
}

export default PaginationLinks
