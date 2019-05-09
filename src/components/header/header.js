import React from 'react';
import ClassNames from './header.module.css';
import Logo from './logo/logo';


const Header = () =>
    <header className={ClassNames.header}>
        <Logo />
        <p>&nbsp;WORD-TIONARY</p>
    </header>

export default Header;
