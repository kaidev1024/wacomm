import { ClickableDiv } from 'src/html';
import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';

interface ColumnProps {
  children: any;
  className?: string;
  onClick?: ZeroFuncType;
}

function Column({ children, className = '', onClick = ZeroFunc }: ColumnProps) {
  return (
    <ClickableDiv className={twcn('flex flex-col gap-2', className)} onClick={onClick}>
      {children}
    </ClickableDiv>
  );
}

export default Column;
