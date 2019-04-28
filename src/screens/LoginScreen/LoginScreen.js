import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import styles from './LoginScreen.module.css';
import {LoginForm} from '../../components/LoginForm';
import {login} from '../../actions/AuthActions';
import background_image from '../../images/background_login.png';

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
            <div className="contentContainer">
                <img src={background_image} className={styles.background}/>
                <h1 className={styles.title}>Welcome to your rowa -<br/> let's get started!</h1>
                <div className={styles.container}>
                    <LoginForm title="Login!" onSubmit={(values) => login(values.username, values.password)}/>
                </div>
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