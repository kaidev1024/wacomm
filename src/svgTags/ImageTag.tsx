import SvgTag from './SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { ImageSvg, SvgSize } from 'wasvg';

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
