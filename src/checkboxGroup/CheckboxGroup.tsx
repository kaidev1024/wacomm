import { List } from 'wacomm';
import { ReactNode, useState } from 'react';
import Checkbox from './Checkbox';

interface ItemProps {
  label: ReactNode;
  value: any;
}

interface CheckboxGroupProps {
  name: string;
  items: ItemProps[];
  // eslint-disable-next-line no-unused-vars
  toggle: (values: string[]) => void;
  maxSelect?: number;
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
}

function CheckboxGroup({
  name,
  items,
  toggle,
  maxSelect = 0,
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

  const itemRenderer = ({ label, value }: ItemProps) => {
    const isSelected = selectedItems[value];
    return (
      <li key={value}>
        <Checkbox
          name={name}
          label={label}
          value={value}
          isSelected={isSelected}
          toggle={handleToggle}
          disabled={!isSelected && maxSelect > 0 && selectedNumber >= maxSelect}
          className={itemClassName}
          labelClassName={labelClassName}
        />
      </li>
    );
  };

  return <List className={className} items={items} itemRenderer={itemRenderer} />;
}

export default CheckboxGroup;
