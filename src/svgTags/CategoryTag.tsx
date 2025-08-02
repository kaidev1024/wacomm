import { Row } from 'src/containers';
import { CategorySvg, SvgSize } from 'wasvg';
import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';

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
      className={twcn(
        `${isHighlighted ? 'border-emerald-300' : 'border-gray-300'} gap-0 rounded-full border px-1 py-0`,
        className
      )}
      onClick={onClick}
    >
      <CategorySvg
        seq={seq}
        size={SvgSize.xs}
        className={isHighlighted ? 'fill-emerald-300 text-emerald-300' : 'fill-gray-600'}
      />
      <div className={isHighlighted ? 'text-emerald-300' : 'text-gray-600'}>{label}</div>
    </Row>
  );
}
