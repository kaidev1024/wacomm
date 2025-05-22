import { twcn, ZeroFunc, ZeroFuncType } from 'pujs';
import { CloseSvg, SvgSize } from 'psvg';

interface CloseIconProps {
  onClick?: ZeroFuncType;
  className?: string;
  hidden?: boolean;
}

function CloseIcon({
  onClick = ZeroFunc,
  className = '',
  hidden = false,
}: CloseIconProps) {
  return (
    <div className={twcn(`w-5 hover:cursor-pointer ${hidden && 'hidden'}`, className)} onClick={onClick}>
      <CloseSvg size={SvgSize.sm} className={twcn('fill-gray-666', className)} />
    </div>
  );
}

export default CloseIcon;
