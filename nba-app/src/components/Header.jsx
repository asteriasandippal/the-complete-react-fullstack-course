import React from 'react';
import FontAwesome from 'react-fontawesome';
import Logo from './Logo';
import Nbalogo from '../assets/images/nba_logo.png';

function HeaderNav() {
    return (
        <div className="header__bars">
            <FontAwesome name="bars" />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <div className="header__opt">
                <HeaderNav />
                <Logo link="/" src={Nbalogo} title="NBA Aplication" className="header__logo"/>
            </div>
        </header>
    );
}

export default Header;
