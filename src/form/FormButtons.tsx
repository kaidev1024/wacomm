import { ZeroFunc, ZeroFuncType } from 'waujs';
import SubmitButton from './SubmitButton';
import { Button } from 'src/buttons';
import { Row } from 'src/containers';

interface FormButtonsProps {
  cancelEdit?: ZeroFuncType;
  isLoading?: boolean;
  disabled?: boolean;
  submitLabel: string;
  cancelLabel: string;
  isCancelable?: boolean;
}

function FormButtons({
  cancelEdit = ZeroFunc,
  isLoading = false,
  disabled = false,
  isCancelable = true,
  submitLabel,
  cancelLabel
}: FormButtonsProps) {
  return (
    <Row className="FormButtons mt-2 justify-end">
      {isCancelable && (
        <Button
          label={cancelLabel}
          onClick={cancelEdit}
          className="CancelButton w-fit mr-2"
          labelClassName="text-sm"
          disabled={isLoading || disabled}
        />
      )}
      <SubmitButton
        className="w-fit"
        isLoading={isLoading}
        disabled={disabled}
        label={submitLabel}
      />
    </Row>
  );
}

export default FormButtons;
