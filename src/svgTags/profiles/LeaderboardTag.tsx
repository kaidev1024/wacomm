import { LeaderboardSvg, SvgSize } from 'wasvg';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';

interface LeaderboardTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgClassName?: string;
  labelClassName?: string;
  svgSize?: SvgSize;
}

function LeaderboardTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgClassName = '',
  svgSize = SvgSize.md,
  labelClassName = ''
}: LeaderboardTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: LeaderboardSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
    />
  );
}

export default LeaderboardTag;
