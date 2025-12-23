import { useState } from 'react';
import { useEscKeydown } from 'waujs';
import TextareaAutosize from 'src/TextareaAutosize';
import { Column, Row } from 'src/containers';
import { EditIcon, P, SaveCancelButtons } from 'src';

export interface TextUpdaterProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onSave: (v: string) => void;
  isLoading: boolean;
  editable: boolean;
  placeholder?: string;
  classNameEdit?: string;
  classNameDisplay?: string;
}

function TextUpdater({
  value: valueInit,
  onSave,
  isLoading,
  editable,
  placeholder = 'A brief introduction...'
}: TextUpdaterProps) {
  const [isEditing, setIsEditing] = useState(false);
  const handleCancelEdit = () => setIsEditing(false);
  const [value, setValue] = useState(valueInit);
  useEscKeydown(() => {
    if (isEditing) {
      handleCancelEdit();
    }
  });
  return isEditing && editable ? (
    <Column className="TextUpdaterEditing w-full gap-2">
      <TextareaAutosize
        minRows={3}
        maxRows={6}
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
    <Row className="TextUpdaterNonEditing w-full gap-2 items-start">
      <P value={value || placeholder} />
      <EditIcon className="cursor-pointer text-blue-500" onClick={() => setIsEditing(true)} />
    </Row>
  );
}

export default TextUpdater;
