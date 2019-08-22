import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class Nav extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/about">About</NavLink> 
                <NavLink to="/contact">Contact</NavLink> 
            </div>
        )
    }
}

export default Nav
