import SvgTag from './SvgTag';
import { SvgSize, UserSvg } from 'wasvg';

interface UserTagProps {
  label: string;
  svgSize?: SvgSize;
  labelClassName?: string;
  svgClassName?: string;
}

function UserTag({
  label,
  svgSize = SvgSize.md,
  labelClassName = '',
  svgClassName = '',
}: UserTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: UserSvg,
        size: svgSize,
        className: svgClassName,
      }}
      isVertical={false}
      labelClassName={labelClassName}
    />
  );
}

export default UserTag;
