import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const SmallBox = ({ title, onClick, value, isChecked }) => {
  const handleOnClick = (e, selectedValue) => {
    e.preventDefault();
    onClick(selectedValue);
  };
  return (
    <div
      onClick={(e) => handleOnClick(e, value)}
      onKeyDown={(e) => handleOnClick(e, value)}
      role="button"
      tabIndex={0}
      className={`box ${isChecked && 'box_checked'}`}
    >
      {title}
    </div>
  );
};

SmallBox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
  isChecked: PropTypes.bool,
};

SmallBox.defaultProps = {
  title: '',
  value: 0,
  onClick: () => {},
  isChecked: false,
};

export default SmallBox;
