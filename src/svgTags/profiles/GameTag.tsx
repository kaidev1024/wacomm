import { GameSvg, SvgSize } from 'wasvg';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';

interface GameTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgClassName?: string;
  labelClassName?: string;
  svgSize?: SvgSize;
}

function GameTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgClassName = '',
  svgSize = SvgSize.md,
  labelClassName = ''
}: GameTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: GameSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
    />
  );
}

export default GameTag;
