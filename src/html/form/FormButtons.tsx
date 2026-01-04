import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import SubmitButton from './SubmitButton';
import { Button } from 'src/buttons';
import { Row } from 'src/containers';

interface FormButtonsProps {
  onCancel?: ZeroFuncType;
  isLoading?: boolean;
  disabled?: boolean;
  submitLabel: string;
  cancelLabel: string;
  isCancelable?: boolean;
  className?: string;
}

function FormButtons({
  onCancel = ZeroFunc,
  isLoading = false,
  disabled = false,
  isCancelable = true,
  submitLabel,
  cancelLabel,
  className = ''
}: FormButtonsProps) {
  return isCancelable ? (
    <Row className={twcn('FormButtons mt-2 justify-end', className)}>
      <Button
        label={cancelLabel}
        onClick={onCancel}
        className="CancelButton w-fit mr-2"
        labelClassName="text-sm"
        disabled={isLoading || disabled}
      />
      <SubmitButton
        className="SubmitButton w-fit"
        isLoading={isLoading}
        disabled={disabled}
        label={submitLabel}
      />
    </Row>
  ) : (
    <SubmitButton
      className={twcn('SubmitButton w-fit', className)}
      isLoading={isLoading}
      disabled={disabled}
      label={submitLabel}
    />
  );
}

export default FormButtons;
