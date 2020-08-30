import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import CircleInitials from '../CircleInitials';

function Header() {
  const userName = 'John Doe';
  return (
    <header className="app-header">
      <div className="__content">
        <img className="__logo" src={Logo} alt="Logo" />
        <p className="__app-name">Squad Management Tool</p>
        <div className="__user-info">
          <p className="__user-name">{userName}</p>
          <CircleInitials size={35} name={userName} />
        </div>
      </div>
    </header>
  );
}

export default Header;
