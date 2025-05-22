import SvgTag from 'src/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { TextPostSvg, SvgSize } from 'psvg';

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
