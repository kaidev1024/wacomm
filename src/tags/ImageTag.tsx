import SvgTag from 'src/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { ImageSvg, SvgSize } from 'psvg';

interface ImageTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function ImageTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: ImageTagProps) {

  return (
    <SvgTag
      label={label || 'Images'}
      icon={{ Svg: ImageSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default ImageTag;
