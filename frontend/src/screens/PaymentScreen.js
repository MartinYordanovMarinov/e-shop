import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Form, Button,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

export const PaymentScreen = () => {
      const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress.address) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Ekont-delivery');
  
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      savePaymentMethod(paymentMethod)
    );
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Начин на плащане</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Изберете метод на плащане</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Доставка с еконт"
              id="Ekont-delivery"
              name="paymentMethod"
              value="Ekont-delivery"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Продължи напред
        </Button>
      </Form>
    </FormContainer>
  );
};
export default PaymentScreen;