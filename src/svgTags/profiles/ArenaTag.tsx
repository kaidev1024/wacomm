import { ArenaSvg, SvgSize } from 'wasvg';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';

interface ArenaTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgClassName?: string;
  labelClassName?: string;
  svgSize?: SvgSize;
  isVertical?: boolean;
}

function ArenaTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgClassName = '',
  svgSize = SvgSize.md,
  labelClassName = '',
  isVertical = false
}: ArenaTagProps) {
  return (
    <SvgTag
      label={label || 'Arena'}
      icon={{ Svg: ArenaSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
      isVertical={isVertical}
    />
  );
}

export default ArenaTag;
