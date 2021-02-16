/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>test</div>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/file-viewer" component={FileViewer} /> */}
          {/* <PrivateRoute path="/sign-in-as" component={SignInAs} /> */}
          {/* <PrivateRoute path="/" component={Homepage} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
