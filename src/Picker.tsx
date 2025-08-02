/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import ReactSelect from 'react-select';
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
  return (
    <div className={twcn('w-full', className)}>
      <ReactSelect
        isClearable={false}
        isSearchable={isSearchable}
        isMulti={false}
        defaultValue={defaultOption}
        options={options}
        onChange={onChange} // TODO: fix type
        isDisabled={disabled}
      />
    </div>
  );
}

export default Picker;
