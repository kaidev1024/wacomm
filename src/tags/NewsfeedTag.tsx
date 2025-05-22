import SvgTag from 'src/components/utilcom/SvgTag';
import { ZeroFunc, ZeroFuncType } from 'pujs';
import { NewsfeedSvg } from 'psvg';

interface NewsfeedTagProps {
  isHighlighted?: boolean;
  onClick?: ZeroFuncType;
  className?: string;
}

function NewsfeedTag({
  isHighlighted = false,
  onClick = ZeroFunc,
  className = '',
}: NewsfeedTagProps) {
  return (
    <SvgTag
      label='Newsfeed'
      icon={{ Svg: NewsfeedSvg }}
      onClick={onClick}
      className={className}
      isHighlighted={isHighlighted}
    />
  );
}

export default NewsfeedTag;
