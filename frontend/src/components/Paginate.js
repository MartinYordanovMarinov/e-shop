import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Stack from '@mui/material/Stack';

const Paginate = ({
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
                ? category
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/store/${category}/page/${x + 1}`
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

export default Paginate;
