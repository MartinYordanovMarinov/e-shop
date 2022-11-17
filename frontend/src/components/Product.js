import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  return (
    
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <Link to={`/product/${product._id}`}>
                <Card.Img className='img' src={product.image}  />
              </Link>
              <div className="img-info">
                <div className="info-inner">
                  <Link to={`/product/${product._id}`}>
                    <span className="p-name">{product.name}</span>
                  </Link>
                </div>
                <div className="a-size">
                  {' '}
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">{product.price}лв.</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
