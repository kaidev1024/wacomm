/* eslint-disable no-unused-vars */

import { Handedness } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { handednessOptions } from './util';

interface HandednessPickerProps {
  onChange: (p: Handedness) => void;
  className?: string;
  value?: Handedness;
}

function HandednessPicker({
  onChange,
  className = '',
  value = Handedness.None
}: HandednessPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={handednessOptions}
      defaultOption={handednessOptions[Number(value)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default HandednessPicker;
