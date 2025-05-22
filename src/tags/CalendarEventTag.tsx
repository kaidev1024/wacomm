import { ZeroFunc, ZeroFuncType } from 'pujs';
import { CalendarEventSvg, SvgSize } from 'psvg';
import SvgTag from 'src/SvgTag';

interface CalendarEventTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
}

function CalendarEventTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
}: CalendarEventTagProps) {

  return (
    <SvgTag
      label={label || 'Event'}
      icon={{
        Svg: CalendarEventSvg,
        size: svgSize,
        className: svgClassName,
      }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={false}
      labelClassName={labelClassName}
    />
  );
}

export default CalendarEventTag;
