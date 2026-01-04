import { twcn } from 'waujs';

interface TextareaProps {
  text: string;
  className?: string;
  rows?: number;
  placeholder?: string;
}

function Textarea({
  text,
  className = '',
  rows = 2,
  placeholder = 'write something...'
}: TextareaProps) {
  return (
    <textarea
      className={twcn(
        'Textarea p-1 text-gray-600 bg-gray-100 rounded-lg max-h-16 overflow-y-auto',
        className
      )}
      disabled
      rows={rows}
      placeholder={placeholder}
    >
      {text}
    </textarea>
  );
}

export default Textarea;
