import ClickableDiv from 'src/html/ClickableDiv';
import { twcn, ZeroFuncType } from 'waujs';

export interface RowProps {
  children: any;
  className?: string;
  onClick?: ZeroFuncType;
}

function Row({ children, className = '', onClick }: RowProps) {
  return (
    <ClickableDiv className={twcn('flex flex-row gap-2 items-center', className)} onClick={onClick}>
      {children}
    </ClickableDiv>
  );
}

export default Row;
