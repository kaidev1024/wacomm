/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import ReactSelect, { SingleValue, ActionMeta } from 'react-select';
import { twcn } from 'waujs';

export interface PickerOptionProps {
  value: any;
  label: ReactNode;
}

export type onChangeType = (option: PickerOptionProps) => void;

interface PickerProps {
  isSearchable?: boolean;
  defaultOption?: PickerOptionProps;
  options: PickerOptionProps[];
  onChange: onChangeType;
  className?: string;
  disabled?: boolean;
}

function Picker({
  defaultOption,
  options,
  onChange,
  isSearchable = false,
  className = '',
  disabled = false
}: PickerProps) {
  const handleChange = (
    newValue: SingleValue<PickerOptionProps>,
    actionMeta: ActionMeta<PickerOptionProps>
  ) => {
    // Only call your onChange if there's actually a value
    if (newValue) {
      onChange(newValue);
    }
  };
  return (
    <div className={twcn('w-full', className)}>
      <ReactSelect
        isClearable={false}
        isSearchable={isSearchable}
        isMulti={false}
        defaultValue={defaultOption}
        options={options}
        onChange={handleChange} // TODO: fix type
        isDisabled={disabled}
      />
    </div>
  );
}

export default Picker;
