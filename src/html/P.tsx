import { twcn } from 'waujs';

interface PProps {
  text: string;
  className?: string;
  placeholder?: string;
}

function P({ className = '', placeholder = 'write something...', text }: PProps) {
  return (
    <p className={twcn('text-gray-600 p-1 rounded-lg whitespace-pre-wrap', className)}>
      {text || <span className="text-gray-300 italic">{placeholder}</span>}
    </p>
  );
}

export default P;
