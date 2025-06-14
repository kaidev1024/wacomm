import { Row } from "src/containers";
import { InterestSvg, SvgSize } from "wasvg";
import { twcn, ZeroFunc, ZeroFuncType } from "waujs";

interface InterestTagProps {
  isHighlighted: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  categorySeq: number;
  seq: number;
  label: string;
}

export default function InterestTag({
  isHighlighted,
  onClick = ZeroFunc,
  className = '',
  categorySeq,
  seq,
  label
}: InterestTagProps) {
  return (
    <Row
      className={twcn(`${isHighlighted ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} gap-0 rounded-full border px-1 py-0`, className)}
      onClick={onClick}
    >
      <InterestSvg
        seq={seq}
        categorySeq={categorySeq}
        size={SvgSize.xs}
        className={isHighlighted ? 'fill-blue-500 text-blue-500' : 'fill-gray-600'}
      />
      <div className={isHighlighted ? 'text-blue-500 text-sm' : 'text-gray-600 text-sm'}>
        {label}
      </div>
    </Row>
  );
}