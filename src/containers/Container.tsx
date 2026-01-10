import { twcn, ZeroFuncType } from 'waujs';

interface ContainerProps {
  children: any;
  className?: string;
  isVertical?: boolean;
  onClick?: ZeroFuncType;
}

function Container({ children, className = '', isVertical = false, onClick }: ContainerProps) {
  return (
    <div
      className={twcn(
        className,
        'gap-1 items-center',
        isVertical ? 'flex flex-col' : 'flex flex-row'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Container;
