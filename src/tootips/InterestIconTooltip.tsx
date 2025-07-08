import { InterestSvg, SvgSize } from "wasvg";
import SvgTooltip from "./SvgTooltip";
import { ZeroFuncType } from "waujs";

interface InterestIconTooltipProps {
  isHighlighted?: boolean;
  categorySeq: number;
  seq: number;
  onClick: ZeroFuncType;
  label: string;
  className?: string;
}

export default function InterestIconTooltip({
  isHighlighted = false,
  onClick,
  label,
  categorySeq,
  seq,
  className = ''
}: InterestIconTooltipProps) {
  return (
    <SvgTooltip
      icon={(
        <InterestSvg
          categorySeq={categorySeq}
          seq={seq}
          size={SvgSize.lg}
          className={isHighlighted ? 'fill-blue-500 text-blue-500 bg-blue-100 rounded-full p-1' : 'fill-gray-600 p-1'}
        />
      )}
      onClick={onClick}
      label={label}
      className={className}
    />
  );
}
