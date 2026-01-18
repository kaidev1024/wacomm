import SvgTag from '../SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { SvgSize, CollectionSvg } from 'wasvg';

interface CollectionsTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
  isVertical?: boolean;
}

function CollectionsTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  labelClassName = '',
  svgClassName = '',
  svgSize = SvgSize.md,
  isVertical = false
}: CollectionsTagProps) {
  return (
    <SvgTag
      label={label || 'Collection'}
      icon={{
        Svg: CollectionSvg,
        size: svgSize,
        className: svgClassName
      }}
      onClick={onClick}
      className={className}
      labelClassName={labelClassName}
      isHighlighted={isHighlighted}
      isVertical={isVertical}
    />
  );
}

export default CollectionsTag;
