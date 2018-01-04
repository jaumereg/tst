import { SET_MESSAGE } from './message.types.js';
const initState = {
    message: ''
}
export default (state = initState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, message: action.payload.message }
        default:
            return state
    }
}