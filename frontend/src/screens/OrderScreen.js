import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  getOrderDetails,
  deliverOrder,
  payOrder,
} from '../actions/orderActions';
import { useParams } from 'react-router-dom';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import emailjs from '@emailjs/browser';

const OrderScreen = () => {
  const params = useParams();
  const orderId = params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const printProducts = () => {
    let stringOutput = '\n';
    order.orderItems.map((x) => stringOutput + x.name + '\n');

    return stringOutput;
  };

  const generateOrderSummeay = () => {
    let stringOutput = '';
    order.orderItems.map((x) => stringOutput + ``);

    return ('<table> <tr> <th> Company</th> <th>Contact</th> <th>Country</th> </tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr> <td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr></table>')
  };

  useEffect(() => {
    if (!order || successDeliver || order._id !== orderId || successPay) {
      dispatch(getOrderDetails(orderId));
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch({ type: ORDER_PAY_RESET });

      var templateParams = {
        to_name: 'Десооооооооооо брат',
        order_id: `${3}`,
        message: 'adaw',
      };

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
    }
    // eslint-disable-next-line
  }, [order, orderId, successDeliver, successPay]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const payHandler = () => {
    dispatch(payOrder(order));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Поръчка {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Доставка</h2>
              <p>
                <strong>Име: </strong> {order.user.firstname}
              </p>
              <p>
                <strong>Имейл: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Адрес:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.deliveryOffice}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Доставена на {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Пратката не е доставена</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Начин на плащане</h2>
              <p>
                <strong>Начин: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Платено на {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Не е платено</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Поръчани продукти</h2>
              {order.orderItems.length === 0 ? (
                <Message>Няма поръчка</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
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
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Доставка</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Данък</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Общо</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {loadingDeliver && <Loader />}
              {userInfo.isAdmin && (!order.isDelivered || !order.isPaid) && (
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block"
                    onClick={deliverHandler}
                  >
                    Отбележи пратката като доставена
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-block"
                    onClick={payHandler}
                  >
                    Отбележи пратката като платена
                  </Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
