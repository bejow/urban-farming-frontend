import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import APIReducer from './APIReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    api: APIReducer,
    form: formReducer,
    app: AppReducer
})