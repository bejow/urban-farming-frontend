import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './types';

import {API_URL, LOGIN_ENDPOINT} from '../constants/api';

export const login = ({username, password}) => {
    console.log("LOOOOGOOO", username, password);
    return (dispatch) => {
        dispatch({ type:LOGIN })
        fetch(API_URL + LOGIN_ENDPOINT, {
            headers: {

            }
        })
        .then(res => res.json())
        .then(result => {
            dispatch({type:LOGIN_SUCCESS, payload:result}) //handle markus response
        }, error => dispatch({type: LOGIN_FAIL, payload: error.message}));
    }
}