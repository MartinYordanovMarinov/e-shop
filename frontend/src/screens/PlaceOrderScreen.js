import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import { useNavigate } from 'react-router-dom';
import { USER_DETAILS_RESET } from '../constants/userConstants';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import {
  updateProduct,
  updateProductAfterPayment,
} from '../actions/productActions';
import axios from 'axios';
import { PRODUCT_UPDATE_SUCCESS } from '../constants/productConstants';
import { addToPendingOrders } from '../actions/pendingOrdersActions';

const PlaceOrderScreen = () => {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [countInStock, setCountInStock] = useState(1);
   const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  if (!cart.shippingAddress.address) {
    navigate('/shipping');
  } else if (!cart.paymentMethod) {
    navigate('/payment');
  }

  var templateParams = {
    to_name: 'Momoka',
    order_id: 'idddddddd',
    message: ` Здравей, ${userInfo.firstname},
      Вашата поръчка #
    `,
  };

  const sendEmail = () => {
    emailjs
      .send('contact_service', 'order', templateParams, 'scdhGRP8ZHHZ7VsPB')
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
       //dispatch(addToPendingOrders(order._id));
      // console.log(order._id)
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [navigate, success, order,dispatch]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );

  };
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

 

  const reduceCountInStockOfProduct = async (product) => {
    // console.log(product.countInStock - product.qty + '  ');
    // console.log(product);
    //setCountInStock(product.countInStock - product.qty);

    dispatch(
      updateProductAfterPayment({
        _id: product.product,
        countInStock: product.countInStock - product.qty,
      })
    );
  };

  const reduceCountInStockHandler = () => {
    cart.cartItems.map((x) => reduceCountInStockOfProduct(x));
  };

  const addToPendingOrders = () => {
   
  };


  

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Доставка</h2>
              <p>
                <strong>Данни за доставка:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.deliveryOffice}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Начин на плащане</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Продукти</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Кошницата Ви е празна</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Информация за поръчка</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Продукти</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Доставка</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Данък</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Общо</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroupItem>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroupItem>

              <ListGroup.Item>
                <Button
                  type="submit"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={() => {
                    reduceCountInStockHandler();
                   //  sendEmail();
                    placeOrderHandler();
                    //  addToPendingOrders();
                  }}
                >
                  Завърши поръчка
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
