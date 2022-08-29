import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const params = useParams();
  const keyword = params.keyword;
   const pageNumber = params.pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch,keyword,pageNumber]);

  return (
     
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Назад
        </Link>
      )}
      <h1>Нови материали</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
