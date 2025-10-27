import { twcn } from 'waujs';
import { Row } from 'src/containers';
import H1 from 'src/H1';

export interface TextInputProps {
  title?: string;
  titleClassName?: string;
  placeholder?: string;
  className?: string;
  value: string;
  disabled?: boolean;
  onChange: (s: string) => void;
}

export default function TextInput({
  title = '',
  titleClassName = '',
  placeholder = '',
  className = '',
  value = '',
  disabled = false,
  onChange
}: TextInputProps) {
  return (
    <Row>
      {title && <H1 label={title} className={twcn('w-10', titleClassName)} />}
      <input
        className={twcn(
          'Input border border-gray-300 rounded px-1 py-0 text-gray-600 border-gray-300',
          className
        )}
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </Row>
  );
}
