import { twcn } from 'waujs';

interface ColumnProps {
  children: any;
  className?: string;
}

function Column({ children, className = '' }: ColumnProps) {
  return <div className={twcn('flex flex-col gap-2', className)}>{children}</div>;
}

export default Column;
