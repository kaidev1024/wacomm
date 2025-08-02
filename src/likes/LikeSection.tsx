import { Row } from 'src/containers';
import { MiddleDot } from 'src/separators';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import LikesCount from './LikesCount';

interface LikeSectionProps {
  className?: string;
  textClassName?: string;
  count?: number;
  isHighlighted?: boolean;
  onLike: ZeroFuncType;
}

export default function LikeSection({
  className = '',
  textClassName = 'text-gray-300',
  count = 0,
  isHighlighted = false,
  onLike
}: LikeSectionProps) {
  return (
    <Row className={className}>
      <span onClick={onLike} className={`${isHighlighted ? 'text-blue-600' : textClassName}`}>
        Like
      </span>
      <MiddleDot className={textClassName} />
      <LikesCount count={count} onClick={ZeroFunc} className={textClassName} />
    </Row>
  );
}
