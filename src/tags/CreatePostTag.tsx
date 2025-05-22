import SvgTag from 'src/components/utilcom/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { CreatePostSvg, SvgSize } from 'psvg';

interface CreatePostTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreatePostTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreatePostTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CreatePostSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}

export default CreatePostTag;
