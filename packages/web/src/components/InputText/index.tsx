import React from 'react';
import './InputText.scss';

type TInputTextProps = {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string;
  name?: string;
  className?: string;
}

function InputText({
  label,
  value,
  onChange,
  placeholder,
  name,
  className,
}: TInputTextProps) {
  return (
    <label className={`input-text ${className || ''}`}>
      <span className="__label">{label}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default InputText;
