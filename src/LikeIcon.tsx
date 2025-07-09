import { ZeroFuncType } from 'waujs';
import { Row } from './containers';

interface LikeIconProps {
  isLiked: boolean;
  count: number;
  onLike: ZeroFuncType;
  onUnlike: ZeroFuncType;
}

function LikeIcon({
  isLiked,
  count,
  onLike,
  onUnlike,
}:LikeIconProps) {

  const handleClick = () => {
    if (isLiked) onUnlike();
    else onLike();
  }

  return (
    <Row onClick={handleClick}>
      {isLiked ? '❤️' : '🤍'}<span>{count}</span>
    </Row>
  )
}

export default LikeIcon;