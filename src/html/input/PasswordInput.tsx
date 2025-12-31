import { InputType } from './util';
import Input from './Input';

interface PasswordInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function PasswordInput({
  value,
  placeholder = '',
  className = '',
  disabled = false,
  onChange
}: PasswordInputProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      className={className}
      type={InputType.Text}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default PasswordInput;
