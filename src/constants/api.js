const API_URL = 'http://localhost:1337';

const DEVICE_ENDPOINT = "/device"

const GET_DEVICE_INFO_ENDPOINT = '/';
const GET_TEMPERATURE_ENDPOINT = DEVICE_ENDPOINT + '/datapoint/temperature';
const GET_OXYGEN_ENDPOINT = DEVICE_ENDPOINT + '/datapoint/oxygen';
const GET_PH_ENDPOINT = DEVICE_ENDPOINT + '/datapoint/ph';
const GET_SETTINGS_ENDPOINT = '/settings';
const LOGIN_ENDPOINT = '/login';
const LOGOUT_ENDPOINT = '/logout';

export {
    API_URL,
    GET_OXYGEN_ENDPOINT,
    GET_TEMPERATURE_ENDPOINT,
    GET_PH_ENDPOINT,
    GET_SETTINGS_ENDPOINT,
    LOGIN_ENDPOINT,
    LOGOUT_ENDPOINT,
}
