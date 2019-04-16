import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import AppNavigation from './navigation/AppNavigation';
import DashboardScreen from './screens/DashboardScreen'
import InfoScreen from './screens/InfoScreen';
import OverviewScreen from './screens/OverviewScreen';
import PlanScreen from './screens/PlanScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import LoginScreen  from './screens/LoginScreen';
import PrivateRoute from './navigation/PrivateRoute';
import { connect } from 'react-redux';

class Root extends Component {
    render(){
        const {user} = this.props
        return(
            <BrowserRouter>
                <div className="appContainer">
                <AppNavigation/>
                    <PrivateRoute user={user} exact path='/' component={DashboardScreen}/>
                    <PrivateRoute user={user} path='/info' component={InfoScreen}/>
                    <PrivateRoute user={user} path='/data' component={OverviewScreen}/>
                    <PrivateRoute user={user} path='/leaderboard' component={LeaderboardScreen}/>
                    <PrivateRoute user={user} path='/plan' component={PlanScreen}/>
                    <Route path='/login' component={LoginScreen}/>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.api.user
    }
}

export default connect(mapStateToProps)(Root)