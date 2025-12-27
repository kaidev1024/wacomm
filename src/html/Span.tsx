import { twcn } from 'waujs';

interface SpanProps {
  className?: string;
  text: string;
}

function Span({ className = '', text }: SpanProps) {
  return <p className={twcn('text-gray-600 p-1 rounded-lg', className)}>{text}</p>;
}

export default Span;
