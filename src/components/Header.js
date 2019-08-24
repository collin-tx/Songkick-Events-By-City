import React, { Component } from 'react';
import Nav from './Nav';
import img from "../img/sk.jpg";

export class Header extends Component {
    render() {
        return (
            <header>
                <div id="showcase">
                    <Nav />
                    <h1 id="app-title">Music Events by City</h1>
                    {/*<div id="sk-cred">
                        <img alt="songkick logo" id="sk-logo" src={img} />
                        <p>powered by songkick</p>
                    </div>*/}
                </div>
            </header>
        )
    }
}

export default Header
