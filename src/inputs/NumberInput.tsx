import { twcn } from "pujs";

interface NumberInputProps {
  placeholder?: string;
  className?: string;
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

function NumberInput({
  placeholder = '',
  className = '',
  value = 1,
  disabled = false,
  onChange,
}: NumberInputProps) {
  return (
    <input
      className={twcn('Input border border-gray-300 rounded px-1 py-0 w-full text-gray-600', className)}
      type='number'
      value={value}
      min={0}
      max={100}
      step={1}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

export default NumberInput;