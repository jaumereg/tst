import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

export default class CandleChart extends Component {
    // proptypes definitions
    static propTypes = {
        data: PropTypes.object
        config: PropTypes.object
    }

    render () {
        return (
            <div>
                Candle Chart!
            </div>
        )
    }
}