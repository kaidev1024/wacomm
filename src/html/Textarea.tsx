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
  rows = 3,
  placeholder = 'write something...'
}: TextareaProps) {
  return (
    <textarea
      className={twcn('Textarea p-1 text-grey-600 bg-grey-50 border-lg', className)}
      disabled
      rows={rows}
      placeholder={placeholder}
    >
      {text}
    </textarea>
  );
}

export default Textarea;
