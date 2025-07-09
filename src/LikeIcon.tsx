import { Row } from './containers';

interface LikeIconProps {
  isLiked: boolean;
  count: number;
  onClick: (isLiked:boolean) => void;
}

function LikeIcon({
  isLiked,
  count,
  onClick,
}:LikeIconProps) {

  return (
    <Row onClick={() => onClick(isLiked)}>
      {isLiked ? '❤️' : '🤍'}<span>{count}</span>
    </Row>
  )
}

export default LikeIcon;