import { ClickableRow } from 'src/containers';
import { P } from 'src/html';
import { InterestSvg, SvgSize } from 'wasvg';
import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { CategoryName, InterestName } from 'wenum';

interface InterestTagProps {
  isHighlighted: boolean;
  onClick?: ZeroFuncType;
  className?: string;
  categoryName: CategoryName;
  interestName: InterestName;
  label: string;
}

export default function InterestTag({
  isHighlighted,
  onClick = ZeroFunc,
  className = '',
  categoryName,
  interestName,
  label
}: InterestTagProps) {
  return (
    <ClickableRow
      className={twcn(
        `${isHighlighted ? 'bg-blue-100 border-blue-500' : 'border-gray-300'} gap-0 rounded-full border px-1 py-0`,
        className
      )}
      onClick={onClick}
    >
      <InterestSvg
        interestName={interestName}
        categoryName={categoryName}
        size={SvgSize.xs}
        className={isHighlighted ? 'fill-blue-500 text-blue-500' : 'fill-gray-600'}
      />
      <P
        text={label}
        className={isHighlighted ? 'text-blue-500 text-sm' : 'text-gray-600 text-sm'}
      />
    </ClickableRow>
  );
}
