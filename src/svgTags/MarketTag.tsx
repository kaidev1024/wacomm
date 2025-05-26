import SvgTag from './SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { SvgSize, MarketSvg } from 'wasvg';

interface MarketTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
}

function MarketTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
}: MarketTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: MarketSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      labelClassName={labelClassName}
    />
  );
}

export default MarketTag;
