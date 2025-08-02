import { ZeroFuncType } from 'waujs';

interface LikesCountProps {
  count?: number;
  onClick: ZeroFuncType;
  className?: string;
}

export default function LikesCount({
  count = 0,
  onClick,
  className = 'text-gray-300'
}: LikesCountProps) {
  return (
    <div onClick={onClick}>
      <span>'❤️'</span>
      <span className={className}>{count}</span>
    </div>
  );
}
