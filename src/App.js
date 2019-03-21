import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers'
import logo from './logo.svg';
import './styles/style.css';
import AppNavigation from './navigation/AppNavigation';
import DashboardScreen from './screens/DashboardScreen'
import InfoScreen from './screens/InfoScreen';
import OverviewScreen from './screens/OverviewScreen';
import PlanScreen from './screens/PlanScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
          <Router>
            <div className="appContainer">
              <AppNavigation/>
              <Route exact path='/' component={DashboardScreen}/>
              <Route path='/info' component={InfoScreen}/>
              <Route path='/data' component={OverviewScreen}/>
              <Route path='/leaderboard' component={LeaderboardScreen}/>
              <Route path='/plan' component={PlanScreen}/>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
