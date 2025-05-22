import SvgTag from './SvgTag';
import { SvgSize, WorenaLogoSvg } from 'psvg';
import { ZeroFuncType } from 'pujs';

interface WorenaLogoProps {
  onClick: ZeroFuncType;
}

function WorenaLogo({ onClick }: WorenaLogoProps) {
  return (
    <SvgTag
      icon={{
        Svg: WorenaLogoSvg,
        className: 'fill-blue-500',
        size: SvgSize.xl,
      }}
      onClick={onClick}
    />
  );
}

export default WorenaLogo;
