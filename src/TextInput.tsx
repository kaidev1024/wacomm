import { twcn } from 'waujs';

interface TextInputProps {
  name?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange: (value: string, name?: string) => void;
}

function TextInput({
  name = '',
  placeholder = '',
  className = '',
  disabled = false,
  onChange
}: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name);
  };

  return (
    <input
      onChange={handleChange}
      name={name}
      className={twcn(
        'TextInput border border-gray-300 rounded px-1 py-0 w-full text-gray-600 border-gray-300',
        className
      )}
      type="text"
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default TextInput;
