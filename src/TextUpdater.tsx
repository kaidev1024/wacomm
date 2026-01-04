import { useState } from 'react';
import { twcn, useEscKeydown } from 'waujs';
import TextareaAutosize from './TextareaAutosize';
import { Column, Row } from 'src/containers';
import { EditIcon, SaveCancelButtons, Textarea } from 'src';

export interface TextUpdaterProps {
  text: string;
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
  text: textInit,
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
  const [text, setText] = useState(textInit);
  useEscKeydown(() => {
    if (isEditing) {
      handleCancelEdit();
    }
  });
  return isEditing ? (
    <Column className="TextUpdaterEditing w-full gap-2">
      <TextareaAutosize
        className={twcn('bg-gray-100 border border-gray-300 rounded-lg', classNameEditing)}
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder!}
        text={text}
        onChange={setText}
      />
      <SaveCancelButtons
        saveLabel="Save"
        cancelLabel="Cancel"
        onSave={() => {
          onSave(text);
          handleCancelEdit();
        }}
        onCancel={handleCancelEdit}
        isSaveDisabled={text.length === 0 || isLoading}
        isCancelDisabled={isLoading}
      />
    </Column>
  ) : (
    <Row className={twcn('TextUpdaterNonEditing w-full gap-2 items-start', classNameNonEditing)}>
      <Textarea
        className={twcn('grow', classNameNonEditing)}
        text={text}
        placeholder={placeholder}
      />
      <EditIcon className="cursor-pointer" onClick={() => setIsEditing(true)} isHighlighted />
    </Row>
  );
}

export default TextUpdater;
