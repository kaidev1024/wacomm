import { ReactElement } from 'react';
import Switch from 'react-switch';
import { twcn } from 'waujs';
import { StaticRow } from 'src/static';

interface ToggleButtonProps {
  label: string | ReactElement;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (v: boolean) => void;
  className?: string;
  disabled?: boolean;
}

function ToggleButton({
  label,
  checked,
  onChange,
  className = '',
  disabled = false
}: ToggleButtonProps) {
  return (
    <StaticRow className={twcn('w-full p-1', className)}>
      {label}
      <Switch
        className="z-1"
        onColor="#3b82f6"
        offColor="#888888"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        height={20}
        width={40}
        handleDiameter={18}
      />
    </StaticRow>
  );
}

export default ToggleButton;
