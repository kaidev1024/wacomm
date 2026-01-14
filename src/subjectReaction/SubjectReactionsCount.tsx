import { ClickableDiv } from 'src/html';
import { ZeroFuncType } from 'waujs';

interface SubjectReactionsCountProps {
  singleLabel: string;
  pluralLabel: string;
  count?: number;
  onClick: ZeroFuncType;
  className?: string;
}

export default function SubjectReactionsCount({
  singleLabel,
  pluralLabel,
  count = 0,
  onClick,
  className = 'text-gray-500 text-sm'
}: SubjectReactionsCountProps) {
  return (
    <ClickableDiv onClick={onClick}>
      <span className={className}>{`${count} ${count === 1 ? singleLabel : pluralLabel}`}</span>
    </ClickableDiv>
  );
}
