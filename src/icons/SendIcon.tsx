import { ZeroFunc, ZeroFuncType } from 'waujs';
import { SendSvg, SvgSize } from 'wasvg';

interface SendIconProps {
  onClick: ZeroFuncType;
  className?: string;
  isHighlighted?: boolean;
}

function SendIcon({ onClick = ZeroFunc, className = '', isHighlighted = false }: SendIconProps) {
  return (
    <div className={className} onClick={onClick}>
      <SendSvg size={SvgSize.xs} className={isHighlighted ? 'fill-blue-600' : 'fill-gray-300'} />
    </div>
  );
}

export default SendIcon;
