import SvgTag from './SvgTag';
import { UpArrowSvg } from 'wasvg';
import { ZeroFuncType } from 'waujs';

interface UpArrowTagProps {
  onClick: ZeroFuncType;
}

function UpArrowTag({
  onClick,
}: UpArrowTagProps) {
  return (
    <SvgTag
      icon={{ Svg: UpArrowSvg }}
      onClick={onClick}
    />
  );
}

export default UpArrowTag;
