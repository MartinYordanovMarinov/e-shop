import React, { useState, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

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
    if(password !== confirmPassword) {
      setMessage('Passwords do not match')
    }else {
      dispatch(register(firstname, lastname, telephoneNumber, email, password));
    }
  };

  //const qty = Number(searchParams.toString().split('=')[1]);
  return (
    <FormContainer>
      <h1>Регистрация</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
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
          Регистрация
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Имате акаунт?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/register'}>
            Вход
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
