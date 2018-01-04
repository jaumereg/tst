// types
import { types } from './chart.types';

// controllers
import { controller as chartController } from './chart.controller';

// lodash
import _ from 'lodash';

let timestamp, rangeValue, limitValue;

export const actions = {
    getHistoryByCrypto(crypto, forex, range, time, limit) {
        return (dispatch) => {
            dispatch({type: types.GET_CHART_REQUEST});
            return chartController.getHistoryByCrypto(crypto, forex, range, time, limit)
                .then((result) => {
                    // not sure if needed (response transform)
                    const candleChartData = _.map(result.data.Data, item => {
                        return {
                            open: item.open,
                            close: item.close
                        };
                    })
                    console.log(result.data.Data, candleChartData);
                    dispatch({
                        type: types.GET_CHART_SUCCESS,
                        response: result.data,
                        data: candleChartData
                    });
                })
                .catch((error) => {
                    console.warn(error);
                    dispatch({
                        type: types.GET_CHART_FAILURE,
                        response: error
                    });
                });
        };
    }
}