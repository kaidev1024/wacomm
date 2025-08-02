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
  className = 'text-gray-300'
}: SubjectReactionsCountProps) {
  return (
    <div onClick={onClick}>
      <span className={className}>{`${count} ${count === 1 ? singleLabel : pluralLabel}`}</span>
    </div>
  );
}
