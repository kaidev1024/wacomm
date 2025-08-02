import SvgTag from './SvgTag';
import { HomeSvg } from 'wasvg';
import { ZeroFuncType } from 'waujs';

interface HomeTagProps {
  isHighlighted: boolean;
  onClick: ZeroFuncType;
  label: string;
}

function HomeTag({ isHighlighted, onClick, label }: HomeTagProps) {
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
