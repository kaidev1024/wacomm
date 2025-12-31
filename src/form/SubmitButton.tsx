import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import { Row } from 'src/containers';
import { LoadingIcon } from 'src/loading';

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
        'SubmitButton px-1 border border-gray-300 rounded-lg w-full px-2 bg-blue-500 text-white',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <Row>
        <div className="w-full text-sm">{label}</div>
        {isLoading && <LoadingIcon />}
      </Row>
    </button>
  );
}

export default SubmitButton;
