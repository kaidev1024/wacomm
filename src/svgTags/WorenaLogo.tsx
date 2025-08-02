import SvgTag from './SvgTag';
import { SvgSize, WorenaLogoSvg } from 'wasvg';
import { ZeroFuncType } from 'waujs';

interface WorenaLogoProps {
  onClick: ZeroFuncType;
}

function WorenaLogo({ onClick }: WorenaLogoProps) {
  return (
    <SvgTag
      icon={{
        Svg: WorenaLogoSvg,
        className: 'fill-blue-500',
        size: SvgSize.xl
      }}
      onClick={onClick}
    />
  );
}

export default WorenaLogo;
