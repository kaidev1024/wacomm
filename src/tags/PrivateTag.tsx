import SvgTag from 'src/components/utilcom/SvgTag';
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
