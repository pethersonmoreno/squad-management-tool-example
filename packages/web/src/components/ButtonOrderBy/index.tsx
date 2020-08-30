import React from 'react';
import './ButtonOrderBy.scss';

type TButtonOrderByProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  direction?: 'asc' | 'desc' | null | false;
  className?: string;
}

function ButtonOrderBy({
  onClick,
  direction,
  className,
}: TButtonOrderByProps) {
  const classDirection = direction && ['asc','desc'].indexOf(direction) >= 0?`--direction-${direction}`:'';
  return (
    <button className={`button-order-by ${classDirection} ${className || ''}`} onClick={onClick}>
      <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="__desc" d="M4 0.25L7.4641 4H0.535898L4 0.25Z" fill="#555759"/>
        <path className="__asc" d="M4 11L0.535899 7.25L7.4641 7.25L4 11Z" fill="#555759"/>
      </svg>
    </button>
  );
}

export default ButtonOrderBy;
