import { twcn } from "pujs";
import H1 from "src/H1";
import Row from "src/Row";

export interface NumberInputProps {
  title?: string;
  placeholder?: string;
  className?: string;
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}

export default function NumberInput({
  title,
  placeholder = '',
  className = '',
  value = 1,
  disabled = false,
  onChange,
}: NumberInputProps) {
  return (
    <Row>
      {title && <H1 label={title} className='w-10' />}
      <input
        className={twcn('Input border border-gray-300 rounded px-1 py-0 text-gray-600', className)}
        type='number'
        value={value}
        min={1}
        max={127}
        step={1}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </Row>
  );
}
