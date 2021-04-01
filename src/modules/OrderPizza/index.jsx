import React from 'react';
import { useDispatch } from 'react-redux';
import SelectPizzaSize from './SelectPizzaSize';
import SelectIngredients from './SelectIngredients';
import { sendOrder } from './redux/orderPizzaActions';

import Card from '../../commonComponents/Card/index';

const index = () => {
  const dispatch = useDispatch();
  return (
    <Card title="Order Your Pizza" onSubmit={() => dispatch(sendOrder())}>
      <SelectPizzaSize />
      <SelectIngredients />
    </Card>
  );
};

export default index;
