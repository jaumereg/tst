// react - redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

// components
import InputPreview from './components/InputPreview';
import DatePicker from './components/DatePicker';
import LimitSelector from './components/LimitSelector';
import RangeSelector from './components/RangeSelector';
import CryptoSelector from './components/CryptoSelector';
import CandleChart from './components/CandleChart';

// actions
import { setMessage } from './ducks/message/message.actions';
import { actions as chartActions } from './ducks/chart/chart.actions';

// styles
import '../sass/index.scss';

// default values
let timestamp = +new Date();
let limit = '1';
let range = 'day';
let crypto = 'BTC';
let forex = 'EUR';

class App extends Component {
    // proptypes definitions
    static propTypes = {
        result: PropTypes.object,
        getHistoryByCrypto: PropTypes.func,
        loading: PropTypes.bool
    }

    constructor(props) {
        super(props);

        // available events
        this._onInputChange = this._onInputChange.bind(this);
        this._onDateChange = this._onDateChange.bind(this);
        this._onLimitChange = this._onLimitChange.bind(this);
        this._onRangeChange = this._onRangeChange.bind(this);
        this._getData = this._getData.bind(this);
    }

    componentDidMount() {
        this._getData();
    }

    _onInputChange = (value) => {
        this.props.dispatch(setMessage(value));
        console.warn(this.props);
    }

    _onDateChange = (date) => {
        // this.props.dispatch(setDate(date));
        timestamp = moment(date, "YYYY/M/D").format("X");
        this._getData();
    }

    _onLimitChange = (limitValue) => {
        limit = limitValue.toString();
        this._getData();
    }

    _onRangeChange = (rangeSelected) => {
        range = rangeSelected;
        this._getData();
    }

    _onCryptoChange = (cryptoSelected) => {
        crypto = cryptoSelected;
        this._getData();
    }

    _onForexChange = (forexSelected) => {
        forex = forexSelected;
        this._getData();
    }

    _getData = () => {
        this.props.dispatch(chartActions.getHistoryByCrypto(crypto, forex, range, timestamp, limit));
    }

    render () {
        const message = this.props.messageReducer.message;
        const cryptoCompareResponse = this.props.chartReducer.response;
        const candleChartData = this.props.chartReducer.data;
        return (
            <div>
                {/*<InputPreview
                    value={message}
                    onChange={this._onInputChange}/>*/}
                <h1>From:</h1>
                <DatePicker
                    onChange={this._onDateChange}/>
                <h1>Limit:</h1>
                <LimitSelector
                    value={limit}
                    onChange={this._onLimitChange}/>
                <h1>Range:</h1>
                <RangeSelector
                    value={range}
                    onChange={this._onRangeChange}/>
                <h1>Crypto:</h1>
                <CryptoSelector
                    value={crypto}
                    onChange={this._onCryptoChange}/>
                <h1>Forex:</h1>
                <ForexSelector
                    value={forex}
                    onChange={this._onForexChange}/>
                <br />
                <h1>Time from: {cryptoCompareResponse ? moment.unix(cryptoCompareResponse.TimeFrom).format("DD/MM/YYYY, H:mm") : '...'}</h1>
                <h1>Time to: {cryptoCompareResponse ? moment.unix(cryptoCompareResponse.TimeTo).format("DD/MM/YYYY, H:mm") : '...'}</h1>
                <h1>Crypto: {crypto}</h1>
                <h1>Forex: {forex}</h1>
                <h1>Limit: {limit}</h1>
                <h1>Range: {range}</h1>
                <CandleChart
                    data=cryptoCompareResponse/>
                {/*<Router>
                    <Link to="/about">
                        <button>Go to About</button>
                    </Link>
                </Router>*/}
            </div>
        )
    }
}

export default connect(state => state)(App);