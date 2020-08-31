import React, { useMemo } from 'react';
import { getInitialsFirstLastFromName } from './helpers';
import './CircleInitials.scss';

type TCircleInitialsProps = {
  size: number;
  name: string;
}
const INITIAL_IF_NOT_FOUND = 'U';

function CircleInitials({
  size,
  name,
}: TCircleInitialsProps) {
  const initials = useMemo(()=> getInitialsFirstLastFromName(name) || INITIAL_IF_NOT_FOUND, [name]);
  return (
    <div className="circle-initials" style={{fontSize: size}}>
      <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="17.5" />
      </svg>
      <div className={'initials'}>{initials}</div>
    </div>
  );
}

export default CircleInitials;
