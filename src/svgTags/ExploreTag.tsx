import SvgTag from './SvgTag';
import { ExploreSvg } from 'wasvg';
import { ZeroFuncType } from 'waujs';

interface ExploreTagProps {
  isHighlighted: boolean;
  onClick: ZeroFuncType;
  label: string;
}

function ExploreTag({
  isHighlighted,
  onClick,
  label,
}: ExploreTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: ExploreSvg }}
      onClick={onClick}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}

export default ExploreTag;
