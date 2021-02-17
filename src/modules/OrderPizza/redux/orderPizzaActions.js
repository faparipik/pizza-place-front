import { GET_DATA, SET_DATA } from './orderPizzaActionsTypes';
import api from '../../../utils/api';

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
