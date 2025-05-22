import SvgTag from 'src/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { PartnersSvg } from 'psvg';

interface PartnersTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
}

function PartnersTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
}: PartnersTagProps) {
  return (
    <SvgTag
      label="Partners"
      icon={{ Svg: PartnersSvg }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default PartnersTag;
