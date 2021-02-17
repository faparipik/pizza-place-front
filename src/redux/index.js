import { combineReducers } from 'redux';
import OrderPizza from '../modules/OrderPizza/redux/orderPizzaReducer';

const rootReducer = combineReducers({ orderPizza: OrderPizza });

export default rootReducer;
