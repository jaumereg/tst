import React, { Component } from 'react';

export default class CryptoSelector extends Component {
    render () {
        return (
            <div>
                <select value={this.props.value} onChange={e => this.props.onChange(e.target.value)}>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="LTC">Litecoin</option>
                    <option value="ADA">Cardano</option>
                    <option value="MIOTA">IOTA</option>
                </select>
            </div>
        )
    }
}