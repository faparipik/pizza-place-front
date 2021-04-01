/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from './redux/store';
import OrderPizza from './modules/OrderPizza';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route path="/order-pizza" component={OrderPizza} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
