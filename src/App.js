/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';

import OrderPizza from './modules/OrderPizza';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/order-pizza" component={OrderPizza} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
