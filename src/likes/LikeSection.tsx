import { MiddleDot } from 'src/separators';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import LikesCount from './LikesCount';
import { ClickableDiv } from 'src/html';
import { StaticRow } from 'src/static';

interface LikeSectionProps {
  className?: string;
  textClassName?: string;
  count?: number;
  isHighlighted?: boolean;
  onLike: ZeroFuncType;
}

export default function LikeSection({
  className = '',
  textClassName = 'text-gray-300 text-sm',
  count = 0,
  isHighlighted = false,
  onLike
}: LikeSectionProps) {
  return (
    <StaticRow className={className}>
      <ClickableDiv
        onClick={onLike}
        className={`${isHighlighted ? 'text-blue-500' : textClassName}`}
      >
        Like
      </ClickableDiv>
      {count > 0 && (
        <>
          <MiddleDot className={textClassName} />
          <LikesCount count={count} onClick={ZeroFunc} className={textClassName} />
        </>
      )}
    </StaticRow>
  );
}
