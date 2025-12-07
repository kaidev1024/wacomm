import { twcn, ZeroFuncType } from 'waujs';
import Button from './Button';

interface StyledButtonProps {
  isHighlighted?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick: ZeroFuncType;
  label: string;
}

// TODO: change StyledButton to PrimaryButton
// interface PrimaryButtonProps {
//   isHighlighted?: boolean;
//   isLoading?: boolean;
//   onClick: ZeroFuncType;
//   label: string;
// }

// interface LabelProps {
//   text: string;
//   className: string;
//   highlightedClassName: string;
// }

const getClassName = (isHighlighted: boolean, disabled: boolean) => {
  if (isHighlighted) return 'bg-blue-500 border-0';
  if (disabled) return 'bg-gray-300 border-gray-300 cursor-not-allowed';
  return 'bg-white border-blue-500';
};

const getLabelClassName = (isHighlighted: boolean, disabled: boolean) => {
  if (isHighlighted) return 'text-white text-sm';
  if (disabled) return 'text-gray-500 text-sm';
  return 'text-blue-500 text-sm';
};

function StyledButton({
  isHighlighted = false,
  isLoading = false,
  disabled = false,
  className = '',
  onClick,
  label
}: StyledButtonProps) {
  return (
    <Button
      className={twcn('w-fit h-fit', getClassName(isHighlighted, disabled), className)}
      labelClassName={twcn('text-sm', getLabelClassName(isHighlighted, disabled))}
      isLoading={isLoading}
      label={label}
      onClick={onClick}
      disabled={disabled}
    />
  );
}

export default StyledButton;
