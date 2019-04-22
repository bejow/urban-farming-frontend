import {ON_CHANGE_SETTINGS} from './types'

export const onChangeSettings = (event) => {
    return {type: ON_CHANGE_SETTINGS, payload: event}
}