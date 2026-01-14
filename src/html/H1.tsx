import { twcn } from 'waujs';

interface H1Props {
  label: string;
  className?: string;
}

export default function H1({ label, className = '' }: H1Props) {
  return <h1 className={twcn('text-gray-600 text-lg overflow-x-scroll', className)}>{label}</h1>;
}
