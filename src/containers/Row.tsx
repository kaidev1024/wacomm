import { ZeroFunc, ZeroFuncType, twcn } from 'waujs';

interface RowProps {
  children: any;
  className?: string;
  onClick?: ZeroFuncType;
}

function Row({
  children,
  className = '',
  onClick = ZeroFunc,
}: RowProps) {
  return (
    <div
      className={twcn('flex flex-row gap-2 items-center', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Row;
