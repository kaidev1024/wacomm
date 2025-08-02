import SvgTag from './SvgTag';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import { NewsfeedSvg } from 'wasvg';

interface NewsfeedTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
}

function NewsfeedTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = ''
}: NewsfeedTagProps) {
  return (
    <SvgTag
      label="Newsfeed"
      icon={{ Svg: NewsfeedSvg }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default NewsfeedTag;
