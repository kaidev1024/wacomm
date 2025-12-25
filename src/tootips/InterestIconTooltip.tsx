import { InterestSvg, SvgSize } from 'wasvg';
import SvgTooltip from './SvgTooltip';
import { ZeroFuncType } from 'waujs';
import { CategoryName, InterestName } from 'wenum';

interface InterestIconTooltipProps {
  isHighlighted?: boolean;
  categoryName: CategoryName;
  interestName: InterestName;
  onClick: ZeroFuncType;
  label: string;
  className?: string;
}

export default function InterestIconTooltip({
  isHighlighted = false,
  onClick,
  label,
  categoryName,
  interestName,
  className = ''
}: InterestIconTooltipProps) {
  return (
    <SvgTooltip
      icon={
        <InterestSvg
          categoryName={categoryName}
          interestName={interestName}
          size={SvgSize.lg}
          className={
            isHighlighted
              ? 'fill-blue-500 text-blue-500 bg-blue-100 rounded-full p-1'
              : 'fill-gray-600 p-1'
          }
        />
      }
      onClick={onClick}
      label={label}
      className={className}
    />
  );
}
