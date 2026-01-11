import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';
import { LocationPointSvg, SvgSize } from 'wasvg';

interface LocationPointTagProps {
  label: string;
  onClick?: ZeroFuncType;
}

function LocationPointTag({ label, onClick = ZeroFunc }: LocationPointTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: LocationPointSvg,
        className: 'fill-gray-500',
        size: SvgSize.sm
      }}
      isVertical={false}
      onClick={onClick}
      labelClassName="text-sm"
    />
  );
}

export default LocationPointTag;
