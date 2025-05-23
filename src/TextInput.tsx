import { twcn } from 'pujs';

interface TextInputProps {
  placeholder?: string;
  className?: string;
  value: string;
  disabled?: boolean;
  onChange: any;
}

function TextInput({
  placeholder = '',
  className = '',
  value = '',
  disabled = false,
  onChange,
}: TextInputProps) {

  return (
    <input
      className={twcn('Input rounded px-1 py-0 w-full text-gray-600 border-gray-300', className)}
      type='text'
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default TextInput;
