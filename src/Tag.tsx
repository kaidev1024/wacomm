import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';

/* eslint-disable no-unused-vars */
interface TagProps {
  label: string;
  onClick?: ZeroFuncType;
  className?: string;
  labelSize?: TagLabelSize;
  color?: TagColor;
}

export enum TagColor {
  Red = 'bg-red-600 text-white',
  Lime = 'bg-lime-700 text-white',
  Blue = 'bg-blue-500 text-white',
  Violet = 'bg-violet-600 text-white',
  Slate = 'bg-slate-300 text-white',
  Cyan = 'bg-cyan-600 text-white',
  Yellow = 'bg-yellow-700 text-white'
}

export enum TagLabelSize {
  Lg = 'text-lg',
  Sm = 'text-sm',
  Xs = 'text-xs',
  Base = 'text-base'
}

function Tag({
  label,
  onClick = ZeroFunc,
  className = '',
  labelSize = TagLabelSize.Base,
  color = TagColor.Blue
}: TagProps) {
  return (
    <div
      onClick={onClick}
      className={twcn('w-fit h-fit px-1 rounded-full', className, labelSize, color)}
    >
      {label}
    </div>
  );
}

export default Tag;
