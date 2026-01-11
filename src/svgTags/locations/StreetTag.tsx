import { ZeroFunc, ZeroFuncType } from 'waujs';
import SvgTag from '../SvgTag';
import { StreetSvg, SvgSize } from 'wasvg';

interface StreetTagProps {
  label: string;
  onClick?: ZeroFuncType;
}

function StreetTag({ label, onClick = ZeroFunc }: StreetTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: StreetSvg,
        className: 'fill-gray-500',
        size: SvgSize.sm
      }}
      isVertical={false}
      onClick={onClick}
      labelClassName="text-sm"
    />
  );
}

export default StreetTag;
