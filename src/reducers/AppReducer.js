import {
    ON_CHANGE_SETTINGS,
} from '../actions/types';

const INITIAL_STATE = {
    localSettings: {},
}

export default (state=INITIAL_STATE, action) => {
    console.log('App Reducer:')
    console.log(action)
    const {payload, type} = action;
    
    switch(type){
        case ON_CHANGE_SETTINGS:
            return {...state, localSettings: {[payload.target.name]: payload.target.value}}
        default:
            return state;
    }
}

