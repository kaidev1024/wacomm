import { ChangeEvent } from 'react';
import { twcn } from 'waujs';

interface CheckboxProps {
  name: string;
  label: string;
  value: any;
  isSelected: boolean;
  // eslint-disable-next-line no-unused-vars
  toggle: (value: string, checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
}

function Checkbox({
  name,
  label,
  value,
  isSelected,
  toggle,
  disabled,
  className = '',
  labelClassName = ''
}: CheckboxProps) {
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    toggle(value, checked);
  };

  return (
    <label
      className={twcn(
        'flex items-center space-x-2 cursor-pointer',
        `${disabled && 'opacity-50 cursor-not-allowed'}`,
        className
      )}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isSelected}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={isSelected}
      />
      <span className={labelClassName}>{label}</span>
    </label>
  );
}

export default Checkbox;
