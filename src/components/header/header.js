import React, { Component } from 'react';
import ClassNames from './header.module.css';
import Logo from './logo/logo';


class Header extends Component {
    render() {
        return (
            <header className={ClassNames.header}>
             <Logo/>
             <p>WORD-TIONARY</p>
            </header>
        );
    }
}

export default Header;
