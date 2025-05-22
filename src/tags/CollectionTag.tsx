import SvgTag from 'src/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { SvgSize, CollectionSvg } from 'psvg';

interface CollectionsTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
}

function CollectionsTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  labelClassName = '',
  svgClassName = '',
  svgSize = SvgSize.md,
}: CollectionsTagProps) {

  return (
    <SvgTag
      label={label}
      icon={{
        Svg: CollectionSvg,
        size: svgSize,
        className: svgClassName,
      }}
      onClick={onClick}
      className={className}
      labelClassName={labelClassName}
      isHighlighted={isHighlighted}
    />
  );
}

export default CollectionsTag;
