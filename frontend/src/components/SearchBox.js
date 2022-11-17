import React, { useState } from 'react';
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SearchBox.scss';

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/store');
    }
  };

  return (
    <div>
      <Form onSubmit={submitHandler} inline="true">
        <Col>
          <div className="form__group field">
            <input
              type="text" 
              className="form__field"
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
              required
            />
            <label for="name" className="form__label">
              <i class="bi bi-search"></i>
            </label>
          </div>
        </Col>
        <Col col-12 col-sm-6>
          <Button type="submit" variant="outline-success" className="p-2">
            Търси
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default SearchBox;
