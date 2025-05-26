import SvgTag from '../SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { TextPostSvg, SvgSize } from 'wasvg';

interface TextPostTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  label?: string;
}

function TextPostTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
  label = '',
}: TextPostTagProps) {
  return (
    <SvgTag
      label={label || 'Text'}
      icon={{ Svg: TextPostSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default TextPostTag;
