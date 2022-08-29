import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const navigate = useNavigate()
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className=" mr-auto"
      ></Form.Control>
     
        <Button
          type="submit"
          variant="outline-success"
          className="p-2 m-3 ml-auto"
        >
          Търси
        </Button>
     
    </Form>
  );
};

export default SearchBox;
