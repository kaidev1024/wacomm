import { ZeroFuncType } from 'waujs';
import { Row } from '../containers';

interface LikeIconProps {
  isLiked: boolean;
  count: number;
  onClick: ZeroFuncType;
}

function LikeIcon({
  isLiked,
  count,
  onClick,
}:LikeIconProps) {
  return (
    <Row onClick={onClick}>
      {isLiked ? '❤️' : '🤍'}
      {count > 0 && <span className='text-gray-300s'>{count}</span>}
    </Row>
  )
}

export default LikeIcon;