import { useState } from 'react';
import { twcn, useEscKeydown } from 'waujs';
import TextareaAutosize from 'src/TextareaAutosize';
import { Column, Row } from 'src/containers';
import { EditIcon, P, SaveCancelButtons } from 'src';

export interface TextUpdaterProps {
  value: string;
  onSave: (v: string) => void;
  isLoading: boolean;
  isEditing: boolean;
  minRows?: number;
  maxRows?: number;
  setIsEditing: (v: boolean) => void;
  placeholder?: string;
  classNameEditing?: string;
  classNameNonEditing?: string;
}

function TextUpdater({
  value: valueInit,
  onSave,
  isLoading,
  isEditing,
  minRows = 1,
  maxRows = 1,
  setIsEditing,
  placeholder = 'A brief introduction...',
  classNameEditing = '',
  classNameNonEditing = ''
}: TextUpdaterProps) {
  const handleCancelEdit = () => setIsEditing(false);
  const [value, setValue] = useState(valueInit);
  useEscKeydown(() => {
    if (isEditing) {
      handleCancelEdit();
    }
  });
  return isEditing ? (
    <Column className={twcn('TextUpdaterEditing w-full gap-2', classNameEditing)}>
      <TextareaAutosize
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder!}
        value={value}
        onChange={setValue}
      />
      <SaveCancelButtons
        saveLabel="Save"
        cancelLabel="Cancel"
        onSave={() => {
          onSave(value);
          handleCancelEdit();
        }}
        onCancel={handleCancelEdit}
        isSaveDisabled={value.length === 0 || isLoading}
        isCancelDisabled={isLoading}
      />
    </Column>
  ) : (
    <Row className={twcn('TextUpdaterNonEditing w-full gap-2 items-start', classNameNonEditing)}>
      <P value={value || placeholder} />
      <EditIcon className="cursor-pointer text-blue-500" onClick={() => setIsEditing(true)} />
    </Row>
  );
}

export default TextUpdater;
