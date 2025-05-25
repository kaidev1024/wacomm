import { twcn, ZeroFunc, ZeroFuncType } from 'pujs';
import { EditSvg, SvgSize } from 'psvg';

interface EditIconProps {
  onClick?: ZeroFuncType;
  className?: string;
  hidden?: boolean;
}

function EditIcon({
  onClick = ZeroFunc,
  className = '',
  hidden = false,
}: EditIconProps) {
  return (
    <div
      className={twcn(`w-5 hover:cursor-pointer ${hidden && 'hidden'}`, className)}
      onClick={onClick}
    >
      <EditSvg
        size={SvgSize.sm}
        className={twcn('fill-gray-600', className)} />
    </div>
  );
}

export default EditIcon;
