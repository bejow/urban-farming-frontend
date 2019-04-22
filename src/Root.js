import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import AppNavigation from './navigation/AppNavigation';
import {DataScreen} from './screens/DataScreen'
import {InfoScreen} from './screens/InfoScreen';
import {DashboardScreen} from './screens/DashboardScreen';
import PlanScreen from './screens/PlanScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import {LoginScreen}  from './screens/LoginScreen';
import PrivateRoute from './navigation/PrivateRoute';
import { connect } from 'react-redux';
import { logout } from './actions/AuthActions';
import {SettingsScreen} from './screens/SettingsScreen';
import ServiceScreen from './screens/ServiceScreen';
import { ArticleScreen } from './screens/ArticleScreen';
import { PlantInfoScreen } from './screens/PlantInfoScreen';
import { PlantDetailScreen } from './screens/PlantDetailScreen';


class Root extends Component {
    render(){
        const {user} = this.props
        return(
            <BrowserRouter>
                <div className="appContainer">
                <div className="dataBoxContainer logout" onClick={this.props.logout}>
                    Logout
                </div>
                <AppNavigation user={user}/>
                    <PrivateRoute user={user} exact path='/' component={DashboardScreen}/>
                    <PrivateRoute user={user} exact path='/info' component={InfoScreen}/>
                    <PrivateRoute user={user} path='/data' component={DataScreen}/>
                    <PrivateRoute user={user} path='/leaderboard' component={LeaderboardScreen}/>
                    <PrivateRoute user={user} path='/plan' component={PlanScreen}/>
                    <PrivateRoute user={user} path='/settings' component={SettingsScreen}/>
                    <PrivateRoute user={user} path='/service' component={ServiceScreen}/>
                    <PrivateRoute user={user} path="/info/article/:id" component={ArticleScreen} />
                    <PrivateRoute user={user} path="/info/plants/:id" component={PlantDetailScreen} />
                    <PrivateRoute user={user} exact path="/info/plants" component={PlantInfoScreen} />
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

export default connect(mapStateToProps, {logout})(Root)