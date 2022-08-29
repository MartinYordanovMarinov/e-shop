import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails } from '../actions/userActions';
import { useParams, useNavigate } from 'react-router-dom';
import {  updateUser } from '../actions/userActions';
import { USER_UPDATE_RESET } from '../constants/userConstants';

const UserEditScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const userId = params.id;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate('/admin/userlist');
    } else {
      if (!user.firstname || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, userId, user,navigate,successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, firstname,lastname, email, isAdmin }));
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Назад
      </Link>
      <FormContainer>
        <h1>Редактирай потребител</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="firstname">
              <Form.Label>Име</Form.Label>
              <Form.Control
                type="name"
                placeholder="Въведете име"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="name"
                placeholder="Въведете фамилия"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Имейл</Form.Label>
              <Form.Control
                type="email"
                placeholder="Въведете имейл"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Редактирай
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
