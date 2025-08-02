import { ZeroFuncType } from 'waujs';
import SvgTag from './SvgTag';
import { LogoutSvg } from 'wasvg';

interface LogoutTagProps {
  label: string;
  onClick: ZeroFuncType;
  className?: string;
}

function LogoutTag({ label, onClick, className = '' }: LogoutTagProps) {
  return (
    <SvgTag
      icon={{
        Svg: LogoutSvg,
        className: 'fill-gray-600'
      }}
      label={label}
      onClick={onClick}
      className={className}
    />
  );
}

export default LogoutTag;
