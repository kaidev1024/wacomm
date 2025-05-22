import SvgTag from 'src/SvgTag';
import { HomeSvg } from 'psvg';
import { ZeroFuncType } from 'pujs';

interface HomeTagProps {
  isHighlighted: boolean;
  onClick: ZeroFuncType;
  label: string;
}

function HomeTag({
  isHighlighted,
  onClick,
  label,
}: HomeTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: HomeSvg }}
      onClick={onClick}
      isVertical
      isHighlighted={isHighlighted}
    />
  );
}

export default HomeTag;
