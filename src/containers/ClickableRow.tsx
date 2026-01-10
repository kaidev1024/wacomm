import { twcn, ZeroFuncType } from 'waujs';
import { RowProps } from './Row';

interface ClickableRowProps extends RowProps {
  onClick: ZeroFuncType;
}

function ClickableRow({ children, className = '', onClick }: ClickableRowProps) {
  return (
    <div onClick={onClick} className={twcn('flex flex-clickablerow gap-2 items-center', className)}>
      {children}
    </div>
  );
}

export default ClickableRow;
