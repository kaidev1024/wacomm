import SvgTag from '../SvgTag';
import { SvgSize, UserSvg } from 'wasvg';

interface UserTagProps {
  label: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
  isVertical?: boolean;
}

function UserTag({
  label,
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
  isVertical = false
}: UserTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: UserSvg,
        size: svgSize,
        className: svgClassName
      }}
      isVertical={isVertical}
      labelClassName={labelClassName}
    />
  );
}

export default UserTag;
