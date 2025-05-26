import SvgTag from '../SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { ArenaSvg, SvgSize } from 'wasvg';

interface CreateArenaTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreateArenaTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreateArenaTagProps) {

  return (
    <SvgTag
      label={label || 'Arena'}
      icon={{ Svg: ArenaSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={false}
    />
  );
}

export default CreateArenaTag;
