import SvgTag from './SvgTag';
import { CreateSvg, SvgSize } from 'wasvg';
import { ZeroFuncType } from 'waujs';

interface CreateTagProps {
  label: string;
  onClick: ZeroFuncType;
}

function CreateTag({ label, onClick }: CreateTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: CreateSvg, size: SvgSize.md }}
      onClick={onClick}
      isVertical
    />
  );
}

export default CreateTag;
