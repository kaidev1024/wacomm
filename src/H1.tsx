import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';

interface H1Props {
  label: string;
  className?: string;
  onClick?: ZeroFuncType;
}

export default function H1({
  label,
  onClick = ZeroFunc,
  className = ''
}: H1Props) {
  return (
    <h1
      className={twcn('text-gray-600 text-lg overflow-x-scroll', className)}
      onClick={onClick}
    >
      {label}
    </h1>
  );
}