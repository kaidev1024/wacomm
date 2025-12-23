import { twcn } from 'waujs';

interface PProps {
  className?: string;
  value?: string;
}

function P({ className = '', value = '' }: PProps) {
  return <p className={twcn('bg-gray-50 text-gray-600 p-1 rounded-lg', className)}>{value}</p>;
}

export default P;
