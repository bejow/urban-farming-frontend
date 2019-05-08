import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL

} from './types';

import {API_URL, LOGIN_ENDPOINT, LOGOUT_ENDPOINT} from '../constants/api';

export const login = ({username, password}) => {
    return (dispatch) => {
        dispatch({ type:LOGIN })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencode' },
            body: JSON.stringify({ username, password })
        };

        fetch(API_URL + LOGIN_ENDPOINT, requestOptions)
        .then(res => res.json())
        .then(result => {
            dispatch({type:LOGIN_SUCCESS, payload:result}) //handle markus response
        }, error => dispatch({type: LOGIN_FAIL, payload: error.message}));
    }
}

export const logout = (user) => {
    return (dispatch) => {
        dispatch({ type: LOGOUT })
        fetch(API_URL + LOGOUT_ENDPOINT, {
            headers: {

            }
        })
        .then(res => res.json())
        .then(result => {
            dispatch({ type:LOGOUT_SUCCESS })
        }, error => dispatch({ type: LOGOUT_FAIL, payload: error.message }))
    }
}