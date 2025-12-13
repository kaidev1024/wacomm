import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { EditSvg, SvgSize } from 'wasvg';

interface EditIconProps {
  onClick?: ZeroFuncType;
  className?: string;
  hidden?: boolean;
  isHighlighted?: boolean;
}

function EditIcon({
  onClick = ZeroFunc,
  className = '',
  hidden = false,
  isHighlighted = false
}: EditIconProps) {
  return (
    <div
      className={twcn(`w-5 hover:cursor-pointer ${hidden && 'hidden'}`, className)}
      onClick={onClick}
    >
      <EditSvg
        size={SvgSize.sm}
        className={twcn(`${isHighlighted ? 'fill-blue-500' : 'fill-gray-600'}`, className)}
      />
    </div>
  );
}

export default EditIcon;
