import { twcn } from 'waujs';

interface SpanProps {
  className?: string;
  text: string;
}

function Span({ className = '', text }: SpanProps) {
  return <span className={twcn('text-gray-600', className)}>{text}</span>;
}

export default Span;
