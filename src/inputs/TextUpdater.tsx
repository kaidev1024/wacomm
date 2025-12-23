import { useState } from 'react';
import { useEscKeydown } from 'waujs';
import TextareaAutosize from 'src/TextareaAutosize';
import { Row } from 'src/containers';
import { P, YesNoButtons } from 'src';

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
  const cancelEdit = () => setIsEditing(false);
  const [value, setValue] = useState(valueInit);
  useEscKeydown(() => {
    if (isEditing) {
      cancelEdit();
    }
  });
  return isEditing && editable ? (
    <Row>
      <TextareaAutosize
        minRows={3}
        maxRows={6}
        placeholder={placeholder!}
        value={value}
        onChange={setValue}
      />
      <YesNoButtons
        yesLabel="Save"
        noLabel="Cancel"
        handleYes={() => {
          onSave(value);
          cancelEdit();
        }}
        handleNo={cancelEdit}
        isYesDisabled={value.length === 0 || isLoading}
        isNoDisabled={isLoading}
      />
    </Row>
  ) : (
    <P value={value || placeholder} />
  );
}

export default TextUpdater;
