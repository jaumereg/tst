// controllers
import { controller as caseController } from './chart.controller';

// types
import { types } from './chart.types.js';

// initial state
export const initialState = {
    isLoading: true,
    response: defaultResponse,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CHART_REQUEST:
            return {
                ...state,
                isLoading: true,
                response: null,
                data: null };
        case types.GET_CHART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                response: action.response,
                data: action.data };
        case types.GET_CHART_FAILURE:
            return {
                ...state,
                isLoading: false,
                response: action.error };
        default:
            return state
    }
}