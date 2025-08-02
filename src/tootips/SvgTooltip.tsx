import { ReactElement } from 'react';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import Tooltip from './Tooltip';

export interface SvgTooltipProps {
  className?: string;
  onClick?: ZeroFuncType;
  icon: ReactElement;
  label: string;
}

function SvgTooltip({ className = '', onClick = ZeroFunc, icon, label }: SvgTooltipProps) {
  return (
    <Tooltip onClick={onClick} className={className} label={label} name={label}>
      {icon}
    </Tooltip>
  );
}

export default SvgTooltip;
