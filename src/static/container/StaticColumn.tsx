import { twcn } from 'waujs';
import { StaticContainerProps } from './util';

function StaticColumn({ children, className = '' }: StaticContainerProps) {
  return <div className={twcn('flex flex-col gap-2 items-start', className)}>{children}</div>;
}

export default StaticColumn;
