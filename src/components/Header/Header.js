import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import './Header.scss';

const Header = () => {
    return (
        <header className='Header'>
            <div className="HeaderWrapper">
                <div className="LeftWrapper">
                    <Link to='/profile'><Logo /></Link>
                </div>
                <div className="RightWrapper">
                    <Navigation />
                </div>
            </div>
        </header>

    );
}

export default Header;