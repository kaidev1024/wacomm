import { twcn } from 'waujs';
import { LoadingIcon } from 'src/loading';

interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: any | null) => void;
  isLoading?: boolean;
  disabled?: boolean;
  isHighlighted?: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
}

const getClassName = (isHighlighted: boolean, disabled: boolean, className?: string) => {
  let ret = twcn(
    'flex flex-row items-center justify-center px-1 border border-gray-300 rounded-lg w-full bg-white',
    className || ''
  );
  if (isHighlighted) ret = twcn(ret, 'bg-blue-200 border-0');
  if (disabled) ret = twcn(ret, 'bg-gray-200');
  return ret;
};

const getLabelClassName = (isHighlighted: boolean, disabled: boolean, className?: string) => {
  let ret = twcn('text-gray-600', className || '');
  if (isHighlighted) ret = twcn(ret, 'text-blue-500');
  if (disabled) ret = twcn(ret, 'text-gray-888');
  return ret;
};

function Button({
  onClick,
  className = '',
  disabled = false,
  isLoading = false,
  isHighlighted = false,
  labelClassName = '',
  label = ''
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={getClassName(isHighlighted!, disabled!, className)}
      type="button"
      onClick={onClick}
    >
      <div className={getLabelClassName(isHighlighted!, disabled!, labelClassName)}>{label}</div>
      {isLoading && <LoadingIcon />}
    </button>
  );
}

export default Button;
