import { GET_DATA, SET_DATA, SET_PIZZA_SIZE } from './orderPizzaActionsTypes';
import api from '../../../utils/api';
import toast from '../../../commonComponents/Tostify';

export const getIngredients = () => async (dispatch) => {
  const data = await api.get('/ingredients');
  dispatch({
    type: GET_DATA,
    payload: data,
  });
};

export const setIngredients = (selectedIngredients) => async (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: selectedIngredients,
  });
};

export const setPizzaSize = (size) => async (dispatch) => {
  dispatch({
    type: SET_PIZZA_SIZE,
    payload: size,
  });
};

export const sendOrder = () => async (dispatch, useState) => {
  const state = useState();
  const { selectedIngredients, pizzaSize } = state.orderPizza;
  const selectedIngredientsKeys = Object.keys(selectedIngredients);
  const filteredIngredients = selectedIngredientsKeys.filter(
    (i) => selectedIngredients[i],
  );

  if (!pizzaSize) {
    toast.error('Please include pizza size');
    return;
  }

  await api.post('/order', { ingredients: filteredIngredients, pizzaSize });
};
