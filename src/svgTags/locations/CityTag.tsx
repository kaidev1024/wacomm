import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';
import { CitySvg, SvgSize } from 'wasvg';

interface CityTagProps {
  label: string;
  onClick?: ZeroFuncType;
}

function CityTag({ label, onClick = ZeroFunc }: CityTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: CitySvg,
        className: 'fill-gray-500',
        size: SvgSize.sm
      }}
      isVertical={false}
      onClick={onClick}
      labelClassName="text-sm"
    />
  );
}

export default CityTag;
