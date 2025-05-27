import { Row } from "src/containers";
import { CategorySvg, SvgSize } from "wasvg";
import { twcn, ZeroFunc, ZeroFuncType } from "waujs";

interface CategoryTagProps {
  isHighlighted: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  seq: number;
  label: string;
}

export default function CategoryTag({
  isHighlighted,
  onClick = ZeroFunc,
  className = '',
  seq,
  label
}: CategoryTagProps) {
  return (
    <Row
      className={twcn(`${isHighlighted ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} gap-0 rounded-full border px-1 py-0`, className)}
      onClick={onClick}
    >
      <CategorySvg
        seq={seq}
        size={SvgSize.xs}
        className={isHighlighted ? 'fill-blue-500 text-blue-500' : 'fill-gray-600'}
      />
      <div className={isHighlighted ? 'text-blue-500' : 'text-gray-600'}>
        {label}
      </div>
    </Row>
  );
}