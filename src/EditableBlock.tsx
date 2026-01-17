import { ElementType, ReactNode, useState } from 'react';
import { ZeroFuncType } from 'waujs';
import { CloseIcon, EditIcon } from './icons';
import { Column, Row } from './containers';
import { StaticColumn, StaticRow } from './static';

interface EditableBlockProps {
  Edit: ElementType;
  Display: ElementType;
  optionalMenu?: ReactNode;
  title: string | ReactNode;
  defaultValues?: any;
  editable?: boolean;
}

export interface EditableBlockEditProps {
  cancelEdit: ZeroFuncType;
  defaultValues: any;
}

export interface EditableBlockDisplayProps {
  defaultValues: any;
}

function EditableBlock({
  Edit,
  Display,
  title,
  defaultValues = {},
  editable = false,
  optionalMenu = null
}: EditableBlockProps) {
  const [isEditting, setIsEditting] = useState(false);
  const cancelEdit = () => setIsEditting(false);
  if (!editable) {
    return (
      <StaticColumn className={`EditableBlock-${title} bg-white rounded-lg px-2 py-1 mb-2`}>
        <StaticRow className="justify-between">
          <div className="p-1 text-lg text-blue-500">{title}</div>
          {optionalMenu}
        </StaticRow>
        <Display defaultValues={{ ...defaultValues, editable }} />
      </StaticColumn>
    );
  }
  return (
    <div className={`EditableBlock-${title} bg-white rounded-lg px-2 py-1 mb-2`}>
      <div className="text-lg text-blue-500 flex justify-between items-center w-9/10">
        <div>{title}</div>
        <CloseIcon hidden={!isEditting} onClick={cancelEdit} />
        <EditIcon hidden={isEditting} onClick={() => setIsEditting(true)} />
      </div>
      {isEditting ? (
        <Edit cancelEdit={cancelEdit} defaultValues={defaultValues} />
      ) : (
        <Display defaultValues={{ ...defaultValues, editable }} />
      )}
    </div>
  );
}

export default EditableBlock;
