import React from 'react';
import './RadioList.scss';

type TRadioListProps = {
  options: string[];
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
}

function RadioList({
  options,
  label,
  value,
  onChange,
  name,
  className,
}: TRadioListProps) {
  return (
    <div className={`radio-list ${className || ''}`}>
      <span className="__label">{label}</span>
      <ul>
        {options.map(option => (
          <li key={option}>
            <label>
              <input
                type="radio"
                name={name}
                value={option}
                checked={option === value}
                onClick={()=>onChange(option)}
              />
              {/* <span className="__radio"></span> */}
              <span className="__label-radio">{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioList;
