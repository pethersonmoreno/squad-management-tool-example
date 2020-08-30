import React from 'react';
import './FloatingIconButtonPlus.scss';

type TFloatingIconButtonPlusProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function FloatingIconButtonPlus({
  onClick,
}: TFloatingIconButtonPlusProps) {
  return (
    <button onClick={onClick} className="floating-icon-button-plus">
      <span className="__content">+</span>
    </button>
  );
}

export default FloatingIconButtonPlus;
