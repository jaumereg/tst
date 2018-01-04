import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class About extends Component {
    render () {
        return (
            <div>
                About
                <Router>
                    <Link to="/">
                        <button>Go Home</button>
                    </Link>
                </Router>
            </div>
        )
    }
}