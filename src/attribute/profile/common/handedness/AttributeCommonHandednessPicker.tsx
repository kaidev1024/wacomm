/* eslint-disable no-unused-vars */

import { Handedness } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { handednessOptions } from './util';
import { AttributeEditProps } from 'src/attribute';

function AttributeCommonHandednessPicker({
  onChange,
  className = '',
  value = Handedness.None
}: AttributeEditProps<Handedness>) {
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

export default AttributeCommonHandednessPicker;
