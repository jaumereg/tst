import React, { Component } from 'react';

export default class InputPreview extends Component {
    render () {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)}
                />
            </div>
        )
    }
}