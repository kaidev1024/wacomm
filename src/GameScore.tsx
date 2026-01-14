import { ZeroFuncType } from 'waujs';
import { LeaderboardType } from 'wenum';
import { ClickableDiv } from './html';

interface GameScoreProps {
  score: number | string;
  className?: string;
  leaderboardType?: LeaderboardType;
  onClick?: ZeroFuncType;
}

function GameScore({
  score,
  className,
  leaderboardType = LeaderboardType.None,
  onClick
}: GameScoreProps) {
  return (
    <ClickableDiv className={`text-green-500 font-bold ${className}`} onClick={onClick}>
      {score}
    </ClickableDiv>
  );
}

export default GameScore;
