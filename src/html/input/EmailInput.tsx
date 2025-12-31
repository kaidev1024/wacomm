import { InputType } from './util';
import Input from './Input';

interface EmailInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function EmailInput({
  value,
  placeholder = '',
  className = '',
  disabled = false,
  onChange
}: EmailInputProps) {
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

export default EmailInput;
