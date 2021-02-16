import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Card = ({ title, children, onSubmit }) => {
  const history = useHistory();
  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <div className="container">
      <h1 className="container_title">{title}</h1>
      <div className="container_separator" />
      <div className="container_body">
        <Form noValidate onSubmit={submitForm}>
          {children}
        </Form>
      </div>
      <div className="container_separator" />
      <div className="container_footer">
        <Button
          onClick={() => history.goBack()}
          outline
          size="lg"
          color="danger"
        >
          Back
        </Button>
        <Button
          outline
          size="lg"
          color="danger"
          type="submit"
          onClick={submitForm}
          className="float-right"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Card.defaultProps = {
  title: 'Title',
  onSubmit: () => {},
};

export default Card;
