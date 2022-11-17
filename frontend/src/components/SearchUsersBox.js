import React, { useState } from 'react';
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SearchBox.scss';

export const SearchUsersBox = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim()) {
      navigate(`/admin/search/${email}`);
    } else {
      navigate('/admin/userlist');
    }
  };
  return (
    <>
      <Form onSubmit={submitHandler} inline="true">
        <Col>
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Search"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form__label">Search</label>
          </div>
        </Col>
        <Col>
          <Button type="submit" variant="outline-success" className="p-2">
            Търси
          </Button>
        </Col>
      </Form>
    </>
  );
};
