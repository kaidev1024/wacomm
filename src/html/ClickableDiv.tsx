import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';

export const divClassName =
  'appearance-none bg-transparent border-none p-0 m-0 text-left cursor-pointer focus:outline-none';

export interface ClickableDivProps {
  children: React.ReactNode;
  className?: string;
  onClick?: ZeroFuncType;
}

function ClickableDiv({ children, className = '', onClick = ZeroFunc }: ClickableDivProps) {
  return (
    <button className={twcn('ClickableDiv', divClassName, className)} onClick={onClick}>
      {children}
    </button>
  );
}

export default ClickableDiv;
