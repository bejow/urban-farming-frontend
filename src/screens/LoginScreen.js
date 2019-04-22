import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';


import LoginForm from '../components/LoginForm';
import {login} from '../actions/AuthActions';

class LoginScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {user, location, login} = this.props;
        if (user){
            return <Redirect to={{ pathname: '/', state: { from: location }}}/>
        }
        else {
        return(
            <div className='contentContainer' style={{alignItems:"center", justifyContent:"center", height:"80vh"}}>
                <LoginForm title="Login!" onSubmit={(values) => login(values.username, values.password)}/>
            </div>
        )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.api.user,
        loading: state.api.loading,
        error: state.api.error,
    };
}

export default connect(mapStateToProps, {login})(LoginScreen);