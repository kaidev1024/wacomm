import { Row } from 'src/containers';
import { Span } from 'src/html';
import { CategorySvg, SvgSize } from 'wasvg';
import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { CategoryName } from 'wenum';

interface CategoryTagProps {
  isHighlighted: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  categoryName: CategoryName;
  label: string;
}

export default function CategoryTag({
  isHighlighted,
  onClick = ZeroFunc,
  className = '',
  categoryName,
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
        categoryName={categoryName}
        size={SvgSize.xs}
        className={isHighlighted ? 'fill-emerald-300 text-emerald-300' : 'fill-gray-600'}
      />
      <Span text={label} className={isHighlighted ? 'text-emerald-300' : 'text-gray-600'} />
    </Row>
  );
}
