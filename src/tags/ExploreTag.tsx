import SvgTag from 'src/components/utilcom/SvgTag';
import { ExploreSvg } from 'psvg';
import { ZeroFuncType } from 'pujs';

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
