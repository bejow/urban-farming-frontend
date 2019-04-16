import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducers from './reducers'
import logo from './logo.svg';
import './styles/style.css';
import Root from './Root'

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}


export default App;
