import { InterestSvg, SvgSize } from "wasvg";
import SvgTooltip from "./SvgTooltip";
import { ZeroFuncType } from "waujs";

interface InterestIconTooltipProps {
  isHighlighted?: boolean;
  categorySeq: number;
  interestSeq: number;
  onClick: ZeroFuncType;
  label: string;
  className?: string;
}

export default function InterestIconTooltip({
  isHighlighted = false,
  onClick,
  label,
  categorySeq,
  interestSeq,
  className = ''
}: InterestIconTooltipProps) {

  return (
    <SvgTooltip
      icon={(
        <InterestSvg
          categorySeq={categorySeq}
          interestSeq={interestSeq}
          size={SvgSize.lg}
          className={isHighlighted ? 'fill-blue-500 text-blue-500' : 'fill-gray-600'}
        />
      )}
      onClick={onClick}
      label={label}
      className={className}
    />
  );
}
