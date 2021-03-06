import { SET_MESSAGE } from './message.types.js';
export const setMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SET_MESSAGE,
            payload: {
                message
            }
        })
    }
}