import { twcn } from 'waujs';
import { StaticContainerProps } from './util';

function StaticRow({ children, className = '' }: StaticContainerProps) {
  return <div className={twcn('flex flex-row gap-2 items-center', className)}>{children}</div>;
}

export default StaticRow;
