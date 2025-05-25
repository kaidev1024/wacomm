import SvgTag from 'src/SvgTag';
import { CitySvg } from 'wasvg';

interface CityTagProps {
  label: string;
  className: string;
}

function CityTag({ label, className }: CityTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CitySvg }}
      isVertical={false}
      className={className}
    />
  );
}

export default CityTag;
