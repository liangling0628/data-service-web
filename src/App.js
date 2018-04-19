import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './router';
import store from './store/index';

import AuthRoute from './container/AuthRoute/AuthRoute';
import LayoutHeader from './container/LayoutHeader/LayoutHeader';
import LayoutMenu from './container/LayoutMenu/LayoutMenu';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LayoutHeader />
          <div className="container-fixed">
            <BrowserRouter>
              <div className="manage-container">
                <LayoutMenu />
                <div className="manage-content">
                  <AuthRoute />
                  <Routes />
                </div>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
