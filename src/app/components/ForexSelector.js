import React, { Component } from 'react';

export default class ForexSelector extends Component {
    render () {
        return (
            <div>
                <select value={this.props.value} onChange={e => this.props.onChange(e.target.value)}>
                    <option value="EUR">Euro (€)</option>
                    <option value="USD">Dollar ($)</option>
                    <option value="GDD">Pounds??? (£)</option>
                </select>
            </div>
        )
    }
}