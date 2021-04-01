import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';

const CheckBox = ({ label, isChecked, onChange }) => (
  <>
    <Label check>
      <Input type="checkbox" onChange={onChange} checked={isChecked} />
      {label}
    </Label>
  </>
);
CheckBox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};
CheckBox.defaultProps = {
  label: '',
  isChecked: false,
  onChange: () => {},
};
export default CheckBox;
