import { SvgTag } from 'src/components/utilcom';
import { CreateSvg, SvgSize } from 'psvg';
import { ZeroFuncType } from 'pujs';

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
