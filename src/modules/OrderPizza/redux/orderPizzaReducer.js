import { GET_DATA, SET_DATA } from './orderPizzaActionsTypes';

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
    default:
      return state;
  }
};
