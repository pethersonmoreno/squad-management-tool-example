import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className="app-header">
      <img className="logo" src={Logo} alt="Logo" />
      <p className="app-name">Squad Management Tool</p>
    </header>
  );
}

export default Header;