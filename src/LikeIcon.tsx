import { ZeroFuncType } from 'waujs';
import { Row } from './containers';

interface LikeIconProps {
  isLiked: boolean;
  count: number;
  onClick: ZeroFuncType
}

function LikeIcon({
  isLiked,
  count,
  onClick
}:LikeIconProps) {
  return (
    <Row onClick={onClick}>
      {isLiked ? '❤️' : '🤍'}<span>{count}</span>
    </Row>
  )
}

export default LikeIcon;