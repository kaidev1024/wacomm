import { List } from 'wacomm';
import { ReactNode, useState } from 'react';
import Checkbox from './Checkbox';

export interface CheckboxGroupItemProps {
  label: ReactNode;
  value: any;
}

interface CheckboxGroupProps {
  items: CheckboxGroupItemProps[];
  // eslint-disable-next-line no-unused-vars
  toggle: (values: string[]) => void;
  name?: string;
  maxN?: number;
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
}

function CheckboxGroup({
  items,
  toggle,
  name = 'checkbox-group',
  maxN = 0,
  className = '',
  itemClassName = '',
  labelClassName = ''
}: CheckboxGroupProps) {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleToggle = (value: string, isSelected: boolean) => {
    const newSelected = { ...selectedItems, [value]: isSelected };
    setSelectedItems(newSelected);
    const selectedValues = Object.keys(newSelected).filter((key) => newSelected[key]);
    toggle(selectedValues);
    setSelectedNumber(selectedValues.length);
  };

  const itemRenderer = ({ label, value }: CheckboxGroupItemProps) => {
    const isSelected = selectedItems[value];
    return (
      <li key={value}>
        <Checkbox
          name={name}
          label={label}
          value={value}
          isSelected={isSelected}
          toggle={handleToggle}
          disabled={!isSelected && maxN > 0 && selectedNumber >= maxN}
          className={itemClassName}
          labelClassName={labelClassName}
        />
      </li>
    );
  };

  return <List className={className} items={items} itemRenderer={itemRenderer} />;
}

export default CheckboxGroup;
