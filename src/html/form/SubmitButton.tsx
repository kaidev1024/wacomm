import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { LoadingIcon } from 'src/loading';
import { StaticRow } from 'src/static';

interface SubmitButtonProps {
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  label: string;
  onClick?: ZeroFuncType;
}

function SubmitButton({
  label,
  className = '',
  isLoading = false,
  disabled = false,
  onClick = ZeroFunc
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={twcn(
        'SubmitButton px-1 border border-gray-300 rounded-lg w-full px-2 text-white',
        disabled || isLoading
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 cursor-pointer',
        className
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <StaticRow>
        <p className="w-full text-sm">{label}</p>
        {isLoading && <LoadingIcon />}
      </StaticRow>
    </button>
  );
}

export default SubmitButton;
