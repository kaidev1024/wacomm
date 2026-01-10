import { twcn } from 'waujs';

export interface RowProps {
  children: any;
  className?: string;
}

function Row({ children, className = '' }: RowProps) {
  return <div className={twcn('flex flex-row gap-2 items-center', className)}>{children}</div>;
}

export default Row;
