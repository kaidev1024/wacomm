import { ClickableDiv } from 'src/html';
import { twcn, ZeroFuncType } from 'waujs';

interface ContainerProps {
  children: any;
  className?: string;
  isVertical?: boolean;
  onClick?: ZeroFuncType;
}

function Container({ children, className = '', isVertical = false, onClick }: ContainerProps) {
  return (
    <ClickableDiv
      className={twcn(className, 'gap-2 items-center flex ', isVertical ? 'flex-col' : 'flex-row')}
      onClick={onClick}
    >
      {children}
    </ClickableDiv>
  );
}

export default Container;
