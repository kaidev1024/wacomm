import SvgTag from 'src/components/utilcom/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { CalendarSvg, SvgSize } from 'psvg';

interface CalendarTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  isVertical?: boolean;
  labelClassName?: string;
  svgClassName?: string;
  label?: string;
  svgSize?: SvgSize;
}

function CalendarTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  isVertical = false,
  label = '',
  labelClassName = '',
  svgClassName = '',
  svgSize = SvgSize.md,
}: CalendarTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: CalendarSvg,
        size: svgSize,
        className: svgClassName,
      }}
      onClick={onClick}
      isHighlighted={isHighlighted}
      isVertical={isVertical}
      labelClassName={labelClassName}
    />
  );
}

export default CalendarTag;
