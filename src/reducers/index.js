import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import APIReducer from './APIReducer';

export default combineReducers({
    api: APIReducer,
    form: formReducer
})