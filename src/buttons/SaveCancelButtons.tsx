import { ZeroFunc, ZeroFuncType } from 'waujs';
import StyledButton from './StyledButton';
import { Row } from 'src/containers';

interface SaveCancelButtonsProps {
  saveLabel?: string;
  cancelLabel?: string;
  onSave?: ZeroFuncType;
  onCancel?: ZeroFuncType;
  isSaveDisabled?: boolean;
  isCancelDisabled?: boolean;
}

export default function SaveCancelButtons({
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  onSave = ZeroFunc,
  onCancel = ZeroFunc,
  isSaveDisabled = false,
  isCancelDisabled = false
}: SaveCancelButtonsProps) {
  return (
    <Row className="items-start">
      <StyledButton
        isHighlighted={true}
        label={saveLabel}
        onClick={onSave}
        disabled={isSaveDisabled}
      />
      <StyledButton
        isHighlighted={false}
        label={cancelLabel}
        onClick={onCancel}
        disabled={isCancelDisabled}
      />
    </Row>
  );
}
