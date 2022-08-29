import React, { useState, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchParams] = useSearchParams('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = searchParams.get('redirect')
    ? searchParams.get('redirect')
    : '/';
  //const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  //const qty = Number(searchParams.toString().split('=')[1]);
  return (
    <FormContainer>
      <h1>Вход</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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

        <Button type="submit" variant="primary">
          Вход
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Нямате регистрация?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Регистрация
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
