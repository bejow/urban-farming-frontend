import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers'
import logo from './logo.svg';
import './styles/style.css';
import AppNavigation from './navigation/AppNavigation';
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen';
import OverviewScreen from './screens/OverviewScreen';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <AppNavigation/>
              <Route exact path='/' component={HomeScreen}/>
              <Route exact path='/settings' component={SettingScreen}/>
              <Route exact path='/overview' component={OverviewScreen}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
