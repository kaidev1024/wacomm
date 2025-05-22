import SvgTag from 'src/SvgTag';
import { PrivateSvg } from 'psvg';

function PrivateTag() {
  return (
    <SvgTag
      icon={{
        Svg: PrivateSvg,
        className: 'fill-blue-500',
      }}
    />
  );
}

export default PrivateTag;
