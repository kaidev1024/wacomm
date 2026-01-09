/* eslint-disable no-unused-vars */

import { Gender } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { genderOptions } from './util';
import { AttributeEditProps } from 'src/attribute';

function AttributeCommonGenderPicker({
  onChange,
  className = '',
  value = Gender.None
}: AttributeEditProps<Gender>) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={genderOptions}
      defaultOption={genderOptions[Number(value)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default AttributeCommonGenderPicker;
