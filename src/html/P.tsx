import { twcn } from 'waujs';

interface PProps {
  className?: string;
  text: string;
}

function P({ className = '', text }: PProps) {
  return <p className={twcn('text-gray-600 p-1 rounded-lg', className)}>{text}</p>;
}

export default P;
