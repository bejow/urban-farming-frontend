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

export const getCurrentOxygen = () => {
    return (dispatch => {
        dispatch({type:FETCH_CURRENT_OXYGEN});
        fetch('http://localhost:3000/oxygen')
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

export const getCurrentPH = () => {
    return (dispatch => {
        dispatch({type:FETCH_CURRENT_PH});
        fetch('http://localhost:3000/ph')
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

export const getCurrentTemperature = () => {
    return (dispatch => {
        dispatch({type:FETCH_CURRENT_TEMPERATURE});
        fetch('http://localhost:3000/temperature')
        .then(res => res.json())
        .then((result) => {
            //successful 
            dispatch({type: FETCH_CURRENT_TEMPERATURE_SUCCESS, payload: result})
        }, 
        (error) => {
            dispatch({type: FETCH_CURRENT_TEMPERATURE_FAIL, payload: error.message})
        })
    })
}

export const getSettings = () => {
    return (dispatch => {
        dispatch({type:FETCH_SETTINGS});
        fetch('http://localhost:3000/settings')
        .then(res => res.json())
        .then((result) => {
            dispatch({type:FETCH_SETTINGS_SUCCESS, payload: result})
        }, (error) => {
            dispatch({type:FETCH_SETTINGS_FAIL, payload: error.message})
        })
    })
}
