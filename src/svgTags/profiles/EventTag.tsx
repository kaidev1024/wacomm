import { ZeroFunc, ZeroFuncType } from 'waujs';
import { EventSvg, SvgSize } from 'wasvg';
import SvgTag from '../SvgTag';

interface EventTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
  isVertical?: boolean;
}

function EventTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
  isVertical = false
}: EventTagProps) {
  return (
    <SvgTag
      label={label || 'Event'}
      icon={{
        Svg: EventSvg,
        size: svgSize,
        className: svgClassName
      }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={isVertical}
      labelClassName={labelClassName}
    />
  );
}

export default EventTag;
