import React, { Component } from 'react';

export default class RangeSelector extends Component {
    render () {
        return (
            <div>
                <select value={this.props.value} onChange={e => this.props.onChange(e.target.value)}>
                    <option value="minute">Minute</option>
                    <option value="hour">Hour</option>
                    <option value="day">Day</option>
                </select>
            </div>
        )
    }
}