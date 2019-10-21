import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Navigation.scss';

class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classForNavigation: 'Navigation',
            classForBurger: 'burgerButton',
            classForMenu: 'mainMenu'
        }
    }

    toggleBurgerMenu = () => {
        if (this.state.classForNavigation === 'Navigation') {
            this.setState({
                classForNavigation: 'Navigation NavigationMedia',
                classForBurger: 'burgerButton burgerOpen',
                classForMenu: 'mainMenu menuOpen'
            })
        } else if (this.state.classForNavigation === 'Navigation NavigationMedia') {
            this.setState({
                classForNavigation: 'Navigation',
                classForBurger: 'burgerButton',
                classForMenu: 'mainMenu'
            })
        }
    }

    render() {
        const { classForNavigation, classForBurger, classForMenu } = this.state;

        return (
            <nav className={classForNavigation}>
                <div className={classForBurger} onClick={this.toggleBurgerMenu}>
                    <div className="burgerButtonTop"></div>
                    <div className="burgerButtonMid"></div>
                    <div className="burgerButtonBottom"></div>
                </div>

                <div className={classForMenu}>
                    <div className="nav-items">
                        <NavLink to="/profile">Profile</NavLink>
                    </div>
                    <div className="nav-items">
                        <NavLink to="/appeal">Appeal</NavLink>
                    </div>
                    <div className="nav-items">
                        <NavLink to="/skills">Skills</NavLink>
                    </div>
                    <div className="nav-items">
                        <NavLink to="/workwithapi">API</NavLink>
                    </div>
                    <div className="nav-items">
                        <a href="https://github.com/herrsteile" target="blank">GitHub</a>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navigation;