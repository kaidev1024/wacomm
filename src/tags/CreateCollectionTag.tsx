import SvgTag from 'src/components/utilcom/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { CollectionSvg, SvgSize } from 'psvg';

interface CreateCollectionTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreateCollectionTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreateCollectionTagProps) {
  return (
    <SvgTag
      label={label || 'Collection'}
      icon={{ Svg: CollectionSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={false}
    />
  );
}

export default CreateCollectionTag;
