import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Button, NavDropdown, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import SearchBox from '../components/SearchBox';
import Meta from '../components/Meta';
import '../assets/css/style.css';
import './HomeScreen.css';
import './StoreScreen.css';
import { DropdownCategory } from '../components/DropdownCategory';
import AdminPaginate from '../components/AdminPaginate';
import PaginateSortOrder from '../components/PaginateSortOrder';

export const SortOrderProductsScreen = () => {
     const params = useParams();
     const keyword = params.keyword;
     const pageNumber = params.pageNumber || 1;
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const sort = params.sort;
     const category = params.category;
     

     const productList = useSelector((state) => state.productList);
     const {
       loading,
       error,
       products,
       page,
       pages,
       pagesSort,
       productsToBeFiltered,
       filteredProducts,
       ascProducts,
       descProducts,
       ratingProducts,
       productsAsc,
       productsDesc,
       productsRating,
     } = productList;
     const [selectedCategory, setSelectedCategory] = useState('');

     const [selectedSort, setSelectedSort] = useState('');

     const handleSort = (event) => {
       console.log(sort);
       setSelectedSort(event.target.value);
     };

     const handleCategoryChange = (event) => {
       console.log(category);
       setSelectedCategory(event.target.value);
     };

     const chooseSortType = () => {
       console.log(sort);
       if (sort === 'asc') {
         return productsAsc;
       } else if (sort === 'desc') {
         return productsDesc;
       } else if (sort === 'rating') {
         return productsRating;
       } else {
         return products;
       }
     };

     const chooseCategorySortType = () => {
       console.log(sort);
       if (sort === 'asc') {
         return ascProducts;
       } else if (sort === 'desc') {
         return descProducts;
       } else if (sort === 'rating') {
         return ratingProducts;
       } else {
         return filteredProducts;
       }
     };

     const log1 = () => {
       console.log('second');
     };
     const log2 = () => {
       console.log('third');
     };

     const submitHandler = (event) => {
       event.preventDefault();
       console.log('submitHandler');
       if (selectedCategory.trim() !== '' && selectedSort.trim() !== '') {
         // console.log(event.target.value);
         navigate(`/store/${selectedCategory}/${selectedSort}`);
         setSelectedCategory('');
         setSelectedSort('');
       } else if (!selectedSort.trim()) {
         navigate(`/store/${selectedCategory}`);
         setSelectedCategory('');
         setSelectedSort('');
       } else if (!selectedCategory.trim()) {
         console.log(selectedSort);
         console.log(sort);
         navigate(`/sortorder/${selectedSort}`);
         setSelectedCategory('');
         setSelectedSort('');
       } else {
         navigate('/store');
       }
     };
     const submitHandlerSort = (event) => {
       event.preventDefault();
       console.log(event.target.value);
       if (selectedSort.trim() === '') {
         // console.log(event.target.value);
         navigate(`/store/${event.target.value}`);
       } else {
         console.log(event.target.value);
         navigate('/store');
       }
     };

     useEffect(() => {
       dispatch(listProducts(keyword, pageNumber, category, sort));
     }, [dispatch, keyword, pageNumber, category, sort]);
  return (
    <>
      <ProductCarousel />
      <Link to="/store" className="btn btn-light">
        Назад
      </Link>
      <Container>
        <h1>Нови материали</h1>

        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <form onSubmit={submitHandler}>
              <div className="roww">
                <Row>
                  <Col sm={9} md={6} lg={4} xl={3}>
                    <SearchBox />
                  </Col>
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <div className="demo">
                      <div className="dropdown-container">
                        <select
                          name="category-list"
                          id="category-list"
                          onChange={handleCategoryChange}
                        >
                          <option value="">All</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Hand">Hand</option>
                          <option value="Sample category">
                            Sample category
                          </option>
                        </select>
                        <div className="select-icon">
                          <svg
                            focusable="false"
                            viewBox="0 0 104 128"
                            width="25"
                            height="35"
                            className="icon"
                          >
                            <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <div className="demo">
                      <div className="dropdown-container">
                        <select
                          name="brand-list"
                          id="brand-list"
                          onChange={handleSort}
                        >
                          <option value="">нормално</option>
                          <option value="asc">Цена възх.</option>
                          <option value="desc">Цена низх.</option>
                          <option value="rating">С най-висока оценка</option>
                        </select>
                        <div className="select-icon">
                          <svg
                            focusable="false"
                            viewBox="0 0 104 128"
                            width="25"
                            height="35"
                            className="icon"
                          >
                            <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={20} md={9} lg={4} xl={3}>
                    <Button
                      type="submit"
                      className="btn-block buton"
                      style={{ width: 10 * 10 }}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </div>
            </form>
            <h2>forth</h2>

            <Row>
              {chooseSortType().map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>

            <PaginateSortOrder
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
              category={category ? category : ''}
              sort={sort ? sort : ''}
            />
          </>
        )}
      </Container>
    </>
  );
};
