import SvgTag from '../SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { SvgSize, TeamSvg } from 'wasvg';

interface TeamTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
  isVertical?: boolean;
}

function TeamTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
  isVertical = false
}: TeamTagProps) {
  return (
    <SvgTag
      label={label || 'Team'}
      icon={{ Svg: TeamSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
      isVertical={isVertical}
    />
  );
}

export default TeamTag;
