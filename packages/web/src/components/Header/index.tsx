import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import CircleInitials from '../CircleInitials';

function Header() {
  const userName = 'John Doe';
  return (
    <header className="app-header">
      <div className="__content">
        <Link className="__logo" to="/"><img src={Logo} alt="Logo" /></Link>
        <Link className="__app-name" to="/">Squad Management Tool</Link>
        <div className="__user-info">
          <p className="__user-name">{userName}</p>
          <CircleInitials size={35} name={userName} />
        </div>
      </div>
    </header>
  );
}

export default Header;
