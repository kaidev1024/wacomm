/* eslint-disable no-unused-vars */

import { Handedness } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { handednessOptions } from './util';
import { ProfileAttributeEditElementProps } from 'src/attribute';

function HandednessPicker({
  onChange,
  className = '',
  value = Handedness.None
}: ProfileAttributeEditElementProps<Handedness>) {
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
