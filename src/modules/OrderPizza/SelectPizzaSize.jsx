import React, { useState } from 'react';
import SmallBox from '../../commonComponents/SmallBox/index';
import {
  SMALL_SIZE,
  MEDIUM_SIZE,
  LARGE_SIZE,
} from '../../constants/pizzaSizes';

const SelectPizzaSize = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <>
      <h5 className="text-center">Select Pizza Size</h5>
      <div>{selectedSize}</div>
      <div className="select_size_box">
        <SmallBox
          title="Small"
          value={SMALL_SIZE}
          isChecked={selectedSize === SMALL_SIZE}
          onClick={(value) => setSelectedSize(value)}
        />
        <SmallBox
          title="Middle"
          value={MEDIUM_SIZE}
          isChecked={selectedSize === MEDIUM_SIZE}
          onClick={(value) => setSelectedSize(value)}
        />
        <SmallBox
          title="Large"
          value={LARGE_SIZE}
          isChecked={selectedSize === LARGE_SIZE}
          onClick={(value) => setSelectedSize(value)}
        />
      </div>
    </>
  );
};

export default SelectPizzaSize;
