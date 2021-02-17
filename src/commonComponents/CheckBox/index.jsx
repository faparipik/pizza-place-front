import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';

const CheckBox = ({ label, onClick, isChecked }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    const { checked } = e.target;
    onClick(checked);
  };

  return (
    <>
      <Label check>
        <Input type="checkbox" checked={isChecked} onChange={handleOnClick} />
        {label}
      </Label>
    </>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  isChecked: PropTypes.bool,
};
CheckBox.defaultProps = {
  label: '',
  onClick: () => {},
  isChecked: false,
};
export default CheckBox;
