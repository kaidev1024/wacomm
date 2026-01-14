import { P } from 'src/html';
import { twcn } from 'waujs';
import { LeaderboardType } from 'wenum';

interface StaticGameScoreProps {
  score: number | string;
  className?: string;
  leaderboardType?: LeaderboardType;
}

function StaticGameScore({
  score,
  className = '',
  leaderboardType = LeaderboardType.None
}: StaticGameScoreProps) {
  return <P text={score} className={twcn('text-center text-xl font-bold', className)} />;
}

export default StaticGameScore;
