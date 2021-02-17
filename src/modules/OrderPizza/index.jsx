import React from 'react';
import SelectPizzaSize from './SelectPizzaSize';
import SelectIngredients from './SelectIngredients';

import Card from '../../commonComponents/Card/index';

const index = () => (
  <Card title="Order Your Pizza">
    <SelectPizzaSize />
    <SelectIngredients />
  </Card>
);

export default index;
