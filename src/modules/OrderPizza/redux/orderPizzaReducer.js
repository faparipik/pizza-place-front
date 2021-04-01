import { GET_DATA, SET_DATA, SET_PIZZA_SIZE } from './orderPizzaActionsTypes';

const initialState = { selectedIngredients: {} };

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        ingredients: payload,
      };
    case SET_DATA:
      return {
        ...state,
        selectedIngredients: payload,
      };

    case SET_PIZZA_SIZE:
      return {
        ...state,
        pizzaSize: payload,
      };
    default:
      return state;
  }
};
