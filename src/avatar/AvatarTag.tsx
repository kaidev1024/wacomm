import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import Avatar from './Avatar';
import { Row } from 'src/containers';
import { H1 } from 'src';

interface AvatarTagProps {
  name: string;
  onClick?: ZeroFuncType;
  className?: string;
  avatarClassName?: string;
  imgSrc?: string;
}

function AvatarTag({
  name,
  onClick = ZeroFunc,
  className = '',
  avatarClassName = 'w-8 h-8',
  imgSrc = ''
}: AvatarTagProps) {
  return (
    <Row className={twcn('AvatarTag bg-white rounded-lg py-1', className)}>
      <Avatar
        className={avatarClassName}
        onClick={onClick}
        letter={name.charAt(0).toUpperCase()}
        imgSrc={imgSrc}
      />
      <H1 label={name} />
    </Row>
  );
}

export default AvatarTag;
