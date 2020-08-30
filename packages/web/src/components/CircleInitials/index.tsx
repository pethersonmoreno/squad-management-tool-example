import React, { useMemo } from 'react';
import './CircleInitials.scss';

type TCircleInitialsProps = {
  size: number;
  name: string;
}

const getInitialsFromName = (name: string): string => {
  let result = name;
  const regex = /([a-zA-Z])[a-zA-Z]+/;
  while(regex.test(result)){
    result = result.replace(regex, '$1');
  }
  result = result.replace(/\s/, '');
  return result;
}

const getInitialsFirstLastFromName = (name: string): string | null => {
  
  const allInitials = getInitialsFromName(name);
  console.log('name: ', name);
  console.log('allInitials: ', allInitials);
  if(allInitials.length === 1){
    return allInitials;
  }
  if(allInitials.length > 1){
    return `${allInitials.substr(0, 1)}${allInitials.substr(allInitials.length - 1, 1)}`;
  }
  return null;
};
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
