import SvgTag from 'src/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { SvgSize, TeamSvg } from 'wasvg';

interface CreateTeamTagProps {
  label?: string;
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  svgSize?: SvgSize;
}

function CreateTeamTag({
  label = '',
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
  svgSize = SvgSize.md,
}: CreateTeamTagProps) {
  return (
    <SvgTag
      label={label || 'Team'}
      icon={{ Svg: TeamSvg, size: svgSize }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
      isVertical={false}
    />
  );
}

export default CreateTeamTag;
