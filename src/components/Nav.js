import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="/about">About</NavLink> 
                <NavLink className="navLink" to="/contact">Contact</NavLink> 
            </div>
        )
    }
}

export default Nav
