/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { getIngredients, setIngredients } from './redux/orderPizzaActions';
import CheckBox from '../../commonComponents/CheckBox';

const SelectIngredients = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.orderPizza.ingredients);
  const selectedIngredients = useSelector(
    (state) => state.orderPizza.selectedIngredients,
  );
  const handleOnClick = (id) => {
    dispatch(
      setIngredients({ ...selectedIngredients, [id]: !selectedIngredients[id] }),
    );
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);
  return (
    <>
      <h5 className="text-center mt-5">Select Ingredients</h5>
      <div className="d-flex justify-content-center mt-4">
        <Row>
          {ingredients &&
            ingredients.map((i) => (
              <Col xs="3" key={i._id}>
                <CheckBox
                  label={i.name}
                  onChange={() => handleOnClick(i._id)}
                  isChecked={selectedIngredients[i._id]}
                />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default SelectIngredients;
