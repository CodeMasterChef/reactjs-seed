import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/about" activeClassName="active">About</Link>
            </nav>
        );
    }
}
