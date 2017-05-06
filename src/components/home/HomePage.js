import React, { Component } from 'react';
import {Link} from 'react-router' ; 
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>This is Home Page</h1>
                <Link to="about" className="btn btn-primary">Learn more</Link>
                
            </div>
        );
    }
}