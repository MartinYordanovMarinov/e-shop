import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';

import {  useNavigate } from 'react-router-dom';

import { listMyOrders } from '../actions/orderActions';
import { LinkContainer } from 'react-router-bootstrap';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const ProfileScreen = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  //const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
       if (!user || !user.firstname || success) {
         dispatch({ type: USER_UPDATE_PROFILE_RESET });
         dispatch(getUserDetails('profile'));
         dispatch(listMyOrders());
       } else {
         setFirstname(user.firstname);
         setLastname(user.lastname);
         setEmail(user.email);
       }
    }
  }, [dispatch, navigate, userInfo, user,success]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          firstname,
          lastname,
          telephoneNumber,
          password,
        })
      );
    }
  };

  //const qty = Number(searchParams.toString().split('=')[1]);
  return (
    <Row>
      <Col md={3}>
        <h2>Моят профил</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Промяната е успешна</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="firstname">
            <Form.Label>Име</Form.Label>
            <Form.Control
              type="firstname"
              placeholder="Въведете име"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="lastname"
              placeholder="Въведете фамилия"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="telephoneNumber">
            <Form.Label>Телефонен номер</Form.Label>
            <Form.Control
              type="telephoneNumber"
              placeholder="Въведете телефонен номер"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Имейл адрес</Form.Label>
            <Form.Control
              type="email"
              placeholder="Въведете имейл адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Парола</Form.Label>
            <Form.Control
              type="password"
              placeholder="Въведете парола"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label> Потвърдете парола</Form.Label>
            <Form.Control
              type="password"
              placeholder="Потвърдете парола"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Промени
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>Моите поръчки</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Индетификатор на поръчка</th>
                <th>Дата</th>
                <th>Общо</th>
                <th>Платено</th>
                <th>Доставена</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Детайли
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
