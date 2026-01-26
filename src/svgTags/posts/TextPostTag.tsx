import SvgTag from '../SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { TextPostSvg, SvgSize } from 'wasvg';

interface TextPostTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgClassName?: string;
  labelClassName?: string;
  svgSize?: SvgSize;
  label?: string;
  isVertical?: boolean;
}

function TextPostTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  labelClassName = '',
  svgClassName = '',
  svgSize = SvgSize.md,
  label = '',
  isVertical = false
}: TextPostTagProps) {
  return (
    <SvgTag
      label={label || 'Text'}
      icon={{ Svg: TextPostSvg, size: svgSize, className: svgClassName }}
      onClick={onClick}
      className={className}
      labelClassName={labelClassName}
      isHighlighted={isHighlighted}
      isVertical={isVertical}
    />
  );
}

export default TextPostTag;
