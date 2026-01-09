/* eslint-disable no-nested-ternary */
import { ElementType, useEffect, useState } from 'react';
import { useEscKeydown } from 'waujs';
import AttributeUnspecified from './AttributeUnspecified';
import { Row } from 'src/containers';
import { H1 } from 'src/html';
import { SaveCancelButtons } from 'src/buttons';
import { EditIcon } from 'src/icons';

interface AttributeUpdaterProps {
  label: string;
  value: any;
  // eslint-disable-next-line no-unused-vars
  onSave: (v: any) => void;
  AttributeEdit: ElementType;
  AttributeDisplay: ElementType;
}

function AttributeUpdater({
  label,
  value: valueInit,
  onSave,
  AttributeEdit,
  AttributeDisplay
}: AttributeUpdaterProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(valueInit);
  const handleSave = () => {
    onSave(value);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setValue(valueInit);
    setIsEditing(false);
  };
  useEffect(() => {
    setValue(valueInit);
  }, [JSON.stringify(valueInit)]);
  useEscKeydown(() => {
    setIsEditing(false);
  });
  return (
    <Row className="AttributeUpdater w-full items-start">
      <H1 className="text-gray-600 w-1/5" label={label} />
      <Row className="w-4/5 justify-between items-start">
        {isEditing ? (
          <Row className="w-full justify-between">
            <AttributeEdit value={value} onChange={setValue} />
            <SaveCancelButtons onSave={handleSave} onCancel={handleCancel} />
          </Row>
        ) : valueInit ? (
          <AttributeDisplay value={valueInit} />
        ) : (
          <AttributeUnspecified />
        )}
        <EditIcon onClick={() => setIsEditing(true)} hidden={isEditing} isHighlighted />
      </Row>
    </Row>
  );
}

export default AttributeUpdater;
