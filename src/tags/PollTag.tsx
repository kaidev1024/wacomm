import SvgTag from 'src/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { PollSvg, SvgSize } from 'wasvg';

interface PollTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function PollTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: PollTagProps) {

  return (
    <SvgTag
      label={label || 'Polls'}
      icon={{
        Svg: PollSvg,
        size: svgSize,
        className: isHighlighted ? 'stroke-blue-500 fill-none' : 'stroke-gray-600 fill-none',
      }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default PollTag;
