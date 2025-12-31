import { InputType } from './util';
import Input from './Input';

interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function TextInput({
  value,
  placeholder = '',
  className = '',
  disabled = false,
  onChange
}: TextInputProps) {
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

export default TextInput;
