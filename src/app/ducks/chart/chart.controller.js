// External Components and Libraries
import axios from 'axios';
import store from '../../../../store';

export const controller = {
    getHistoryByCrypto(crypto, forex, range, time, limit) {
        return axios({
            method: 'GET',
            url: `https://min-api.cryptocompare.com/data/histo${range}?fsym=${crypto}&tsym=${forex}&limit=${limit}&aggregate=1&toTs=${time}`
        });
    }
};