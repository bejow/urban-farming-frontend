import {
    FETCH_CURRENT_OXYGEN,
    FETCH_CURRENT_OXYGEN_FAIL,
    FETCH_CURRENT_OXYGEN_SUCCESS,
    FETCH_CURRENT_PH,
    FETCH_CURRENT_PH_FAIL,
    FETCH_CURRENT_PH_SUCCESS,
    FETCH_CURRENT_TEMPERATURE,
    FETCH_CURRENT_TEMPERATURE_FAIL,
    FETCH_CURRENT_TEMPERATURE_SUCCESS,
    FETCH_SETTINGS,
    FETCH_SETTINGS_SUCCESS,
    FETCH_SETTINGS_FAIL,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    currentOxygen: null,
    currentPH: null,
    currentTemperature: null,
    settings: {},
    loading: true,
    error: false,
    status: '',
    user: null
}

export default (state=INITIAL_STATE, action) => {
    console.log('Api Reducer:')
    console.log(action)
    const {payload, type} = action;
    
    switch(type){
        case FETCH_CURRENT_OXYGEN:
            return {...state, loading: true};
        case FETCH_CURRENT_PH:
            return {...state, loading: true};
        case FETCH_CURRENT_TEMPERATURE:
            return {...state, loading: true};
        case FETCH_CURRENT_OXYGEN_FAIL:
            return {...state, loading: false, error: true, status:payload};
        case FETCH_CURRENT_PH_FAIL:
            return {...state, loading: false, error: true, status:payload};
        case FETCH_CURRENT_TEMPERATURE_FAIL:
            return {...state, loading: false, error: true, status:payload};
        case FETCH_CURRENT_OXYGEN_SUCCESS:
            return {...state, loading: false, currentOxygen: payload};
        case FETCH_CURRENT_PH_SUCCESS:
            return {...state, loading: false, currentPH: payload};
        case FETCH_CURRENT_TEMPERATURE_SUCCESS:
            return {...state, loading: false, currentTemperature: payload};
        case FETCH_SETTINGS:
            return {...state, loading: true}
        case FETCH_SETTINGS_SUCCESS:
            return {...state, loading: false, settings: payload}
        case FETCH_SETTINGS_FAIL:
            return {...state, loading: false, error: true, status: payload}
        case LOGIN:
            return {...state, loading: true, error:false}
        case LOGIN_SUCCESS:
            return {...state, user:payload, loading:false, error:false}
        case LOGIN_FAIL:
            return {...state, error:payload, loading:false}
        default:
            return state;
    }
}

