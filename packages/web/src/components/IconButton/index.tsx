import React from 'react';
import './IconButton.scss';

type TIconButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  icon: 'share' | 'delete' | 'edit';
  className?: string;
}

function IconButton({
  onClick,
  icon,
  className,
}: TIconButtonProps) {
  return (
    <button className={`icon-button ${className || ''}`} onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </button>
  );
}

export default IconButton;
