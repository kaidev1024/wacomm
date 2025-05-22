import { AddSvg } from 'psvg';
import { ZeroFuncType } from 'pujs';
import SvgButton from './SvgButton';

interface ControlButtonProps {
  label: string;
  onClick: ZeroFuncType;
}

function AddButton({ label, onClick }: ControlButtonProps) {
  return (
    <SvgButton
      icon={{ Svg: AddSvg, className: 'fill-blue-500' }}
      label={label}
      onClick={onClick}
      className="AddButton border-0 text-blue-500 bg-blue-200 w-fit pr-2"
      labelClassName="text-blue-500 text-base"
    />
  );
}

export default AddButton;
