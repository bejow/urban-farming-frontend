import {
    FETCH_CURRENT_OXYGEN,
    FETCH_CURRENT_TEMPERATURE,
    FETCH_CURRENT_PH,
    FETCH_CURRENT_OXYGEN_SUCCESS,
    FETCH_CURRENT_TEMPERATURE_SUCCESS,
    FETCH_CURRENT_PH_SUCCESS,
    FETCH_CURRENT_OXYGEN_FAIL,
    FETCH_CURRENT_TEMPERATURE_FAIL,
    FETCH_CURRENT_PH_FAIL,
    FETCH_SETTINGS,
    FETCH_SETTINGS_SUCCESS,
    FETCH_SETTINGS_FAIL
} from './types';

import { 
    API_URL,
    GET_TEMPERATURE_ENDPOINT, 
    GET_OXYGEN_ENDPOINT,
    GET_PH_ENDPOINT, 
    GET_SETTINGS_ENDPOINT 
} from '../constants/api';

export const getCurrentOxygen = (token) => {
    return (dispatch => {
        dispatch({type:FETCH_CURRENT_OXYGEN});
        fetch(API_URL + GET_OXYGEN_ENDPOINT, {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then((result) => {
            //successful 
            dispatch({type: FETCH_CURRENT_OXYGEN_SUCCESS, payload: result})
        }, 
        (error) => {
            dispatch({type: FETCH_CURRENT_OXYGEN_FAIL, payload: error.message})
        })
    })
}

export const getCurrentPH = (token) => {
    return (dispatch => {
        dispatch({type:FETCH_CURRENT_PH});
        fetch(API_URL + GET_PH_ENDPOINT, {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then((result) => {
            //successful 
            dispatch({type: FETCH_CURRENT_PH_SUCCESS, payload: result})
        }, 
        (error) => {
            dispatch({type: FETCH_CURRENT_PH_FAIL, payload: error.message})
        })
    })
}

export const getCurrentTemperature = (token) => {
    return (dispatch => {
        dispatch({type:FETCH_CURRENT_TEMPERATURE});
        fetch(API_URL + GET_TEMPERATURE_ENDPOINT, {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then((result) => {
            //successful 
            dispatch({type: FETCH_CURRENT_TEMPERATURE_SUCCESS, payload: result})
        }, 
        (error) => {
            console.log(error)
            dispatch({type: FETCH_CURRENT_TEMPERATURE_FAIL, payload: error.message})
        })
        .catch(error => dispatch({type: FETCH_CURRENT_TEMPERATURE_FAIL, payload: error}))
    })
}

export const getSettings = (token) => {
    return (dispatch => {
        dispatch({type:FETCH_SETTINGS});
        fetch(API_URL + GET_SETTINGS_ENDPOINT, {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then((result) => {
            dispatch({type:FETCH_SETTINGS_SUCCESS, payload: result})
        }, (error) => {
            dispatch({type:FETCH_SETTINGS_FAIL, payload: error.message})
        })
    })
}
