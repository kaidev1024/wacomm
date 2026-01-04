import { twcn } from 'waujs';
import { InputType } from './util';

// TODO: need to add input validation based on type
interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type: InputType;
}

function Input({
  value,
  placeholder = '',
  className = '',
  disabled = false,
  onChange,
  type
}: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      className={twcn(
        'TextInput border rounded px-1 py-0 w-full text-gray-600',
        disabled ? 'border-gray-300 text-gray-300' : 'border-gray-600 text-gray-600',
        className
      )}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default Input;
