import { ZeroFunc, ZeroFuncType } from 'waujs';
import SubmitButton from './SubmitButton';
import { Button } from 'src/buttons';
import { Row } from 'src/containers';

interface FormButtonsProps {
  cancelEdit?: ZeroFuncType;
  isLoading?: boolean;
  disabled?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  formID?: string;
  isCancelable?: boolean;
}

function FormButtons({
  cancelEdit = ZeroFunc,
  isLoading = false,
  disabled = false,
  isCancelable = true,
  formID = undefined,
  submitLabel = undefined,
  cancelLabel = undefined
}: FormButtonsProps) {
  let optional = {};
  // formID is used in case submit button is outside form tag
  if (formID) optional = { formID };

  return (
    <Row className="FormButtons flex-row-reverse">
      <SubmitButton
        className="w-fit"
        isLoading={isLoading}
        disabled={disabled}
        label={submitLabel || 'Save'}
        {...optional}
      />
      {isCancelable && (
        <Button
          label={cancelLabel || 'Cancel'}
          onClick={cancelEdit}
          className="CancelButton w-fit mr-2"
          labelClassName="text-sm"
          disabled={isLoading || disabled}
        />
      )}
    </Row>
  );
}

export default FormButtons;
