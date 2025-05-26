import { ArenaSvg, SvgSize } from 'wasvg';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from './SvgTag';

interface ArenaTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgClassName?: string;
  labelClassName?: string;
  svgSize?: SvgSize;
}

function ArenaTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgClassName = '',
  svgSize = SvgSize.md,
  labelClassName = '',
}: ArenaTagProps) {

  return (
    <SvgTag
      label={label}
      icon={{ Svg: ArenaSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
    />
  );
}

export default ArenaTag;
