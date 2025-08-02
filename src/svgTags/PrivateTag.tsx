import SvgTag from './SvgTag';
import { PrivateSvg } from 'wasvg';

function PrivateTag() {
  return (
    <SvgTag
      icon={{
        Svg: PrivateSvg,
        className: 'fill-blue-500'
      }}
    />
  );
}

export default PrivateTag;
