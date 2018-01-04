import React, { Component } from 'react';

export default class DatePicker extends Component {
    render () {
        return (
            <div>
                <input
                    type="date"
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)}
                />
            </div>
        )
    }
}