import { twcn } from 'waujs';

interface PProps {
  text: string | number;
  className?: string;
  placeholder?: string;
}

function P({ className = '', placeholder = 'write something...', text }: PProps) {
  return (
    <p
      className={twcn(
        'text-gray-600 bg-gray-100 p-1 rounded-lg max-h-40 overflow-y-auto whitespace-pre-wrap w-full',
        className
      )}
    >
      {text || <span className="text-gray-300 italic">{placeholder}</span>}
    </p>
  );
}

export default P;
