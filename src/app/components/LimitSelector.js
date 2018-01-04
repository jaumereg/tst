import React, { Component } from 'react';

export default class LimitSelector extends Component {
    render () {
        return (
            <div>
                <input
                    type="number"
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)}
                    min="1"
                />
            </div>
        )
    }
}