import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';
import { register } from '../actions/userActions';

export const ShippingScreen = () => {
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [telephoneNumber, setTelephoneNumber] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('123456');
   const [confirmPassword, setConfirmPassword] = useState('');
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [deliveryOffice, setDeliveryOffice] = useState(
    shippingAddress.deliveryOffice
  );
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
   

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ address, city, postalCode, deliveryOffice })
    );
    if(!userInfo){
      console.log('register');
    dispatch(register(firstname, lastname, telephoneNumber, email, password));
  }
    navigate('/payment');
  };

  return (
    <>
      {userInfo ? (
        <FormContainer>
          <CheckoutSteps step1 step2 />
          <h1>Доставка</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="address">
              <Form.Label>Адрес</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете адрес"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>Град</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете град"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="postalCode">
              <Form.Label>Пощ. код</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете пощ. код"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="deliveryOffice">
              <Form.Label>Офис на Еконт</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете адрес на офис на Еконт"
                value={deliveryOffice}
                required
                onChange={(e) => setDeliveryOffice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Продължи напред
            </Button>
          </Form>
        </FormContainer>
      ) : (
        <FormContainer>
          <CheckoutSteps step1 step2 />
          <h1>Доставка</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="address">
              <Form.Label>Име</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете име "
                value={firstname}
                required
                onChange={(e) => setFirstname(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете фамилия"
                value={lastname}
                required
                onChange={(e) => setLastname(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Телефонен номер</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете телефонен номер"
                value={telephoneNumber}
                required
                onChange={(e) => setTelephoneNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Имейл</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете имейл"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Адрес</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете адрес"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>Град</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете град"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="postalCode">
              <Form.Label>Пощ. код</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете пощ. код"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="deliveryOffice">
              <Form.Label>Офис на Еконт</Form.Label>
              <Form.Control
                type="text"
                placeholder="Въведете адрес на офис на Еконт"
                value={deliveryOffice}
                required
                onChange={(e) => setDeliveryOffice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Продължи напред
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};
export default ShippingScreen;