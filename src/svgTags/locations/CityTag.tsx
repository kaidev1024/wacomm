import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';
import { CitySvg } from 'wasvg';

interface CityTagProps {
  label: string;
  onClick?: ZeroFuncType;
}

function CityTag({
  label,
  onClick = ZeroFunc
}: CityTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: CitySvg,
        className: "fill-gray-500"
      }}
      isVertical={false}
      onClick={onClick}
      labelClassName='text-sm'
    />
  );
}

export default CityTag;
