import { ZeroFuncType } from 'waujs';

interface LikesCountProps {
  count?: number;
  onClick: ZeroFuncType;
  className?: string;
  textClassName?: string;
}

export default function LikesCount({
  count = 0,
  onClick,
  className = '',
  textClassName = 'text-gray-300'
}: LikesCountProps) {
  return (
    <div className={className} onClick={onClick}>
      <span>❤️&nbsp;</span>
      <span className={textClassName}>{count}</span>
    </div>
  );
}
