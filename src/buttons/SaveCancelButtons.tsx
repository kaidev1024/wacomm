import { twcn, ZeroFunc, ZeroFuncType } from 'waujs';
import StyledButton from './StyledButton';
import { StaticRow } from 'src/static';

interface SaveCancelButtonsProps {
  saveLabel?: string;
  cancelLabel?: string;
  onSave?: ZeroFuncType;
  onCancel?: ZeroFuncType;
  isSaveDisabled?: boolean;
  isCancelDisabled?: boolean;
  className?: string;
}

export default function SaveCancelButtons({
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  onSave = ZeroFunc,
  onCancel = ZeroFunc,
  isSaveDisabled = false,
  isCancelDisabled = false,
  className = ''
}: SaveCancelButtonsProps) {
  return (
    <StaticRow className={twcn('SaveCancelButtons w-full justify-end gap-2', className)}>
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
    </StaticRow>
  );
}
