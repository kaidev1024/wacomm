import { P } from 'src/html';
import { LeaderboardType } from 'wenum';

interface StaticGameScoreProps {
  score: number | string;
  className?: string;
  leaderboardType?: LeaderboardType;
}

function StaticGameScore({
  score,
  className,
  leaderboardType = LeaderboardType.None
}: StaticGameScoreProps) {
  return <P text={score} className={`text-green-500 font-bold ${className}`} />;
}

export default StaticGameScore;
