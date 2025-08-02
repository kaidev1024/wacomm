import SvgTag from './SvgTag';
import { CommentSvg, SvgSize } from 'wasvg';
import { ZeroFuncType } from 'waujs';

interface CommentTagProps {
  label?: string;
  onClick: ZeroFuncType;
}

function CommentTag({ label = 'Comment', onClick }: CommentTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CommentSvg, size: SvgSize.md }}
      onClick={onClick}
      isVertical
    />
  );
}

export default CommentTag;
