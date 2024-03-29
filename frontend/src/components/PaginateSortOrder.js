import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const PaginateSortOrder = ({
  pages,
  page,
  isAdmin = false,
  keyword = '',
  category = '',
  sort = '',
}) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? sort
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/sortorder/${sort}/page/${x + 1}`
                  : `/store/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default PaginateSortOrder;
