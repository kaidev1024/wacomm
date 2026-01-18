import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import Avatar from './Avatar';
import { H1, StaticRow } from 'src';

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
    <StaticRow className={twcn('AvatarTag bg-white rounded-lg py-1', className)}>
      <Avatar
        className={avatarClassName}
        onClick={onClick}
        letter={name?.charAt(0).toUpperCase()}
        imgSrc={imgSrc}
      />
      <H1 label={name} />
    </StaticRow>
  );
}

export default AvatarTag;
