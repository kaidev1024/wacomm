import { ZeroFuncType } from 'waujs';
import { Row } from '../containers';

interface LikeIconProps {
  isHighlited?: boolean;
  label?: string;
  onClick: ZeroFuncType;
}

function LikeIcon({
  isHighlited = false,
  label = 'like',
  onClick,
}:LikeIconProps) {
  return (
    <Row onClick={onClick}>
      {isHighlited ? '❤️' : '🤍'}
      <span className={`${isHighlited ? 'text-blue-600' : 'text-gray-600'}`}>{label}</span>
    </Row>
  )
}

export default LikeIcon;