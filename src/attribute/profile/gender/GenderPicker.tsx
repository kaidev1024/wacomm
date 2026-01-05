/* eslint-disable no-unused-vars */

import { Gender } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { genderOptions } from './util';

interface GenderPickerProps {
  onChange: (p: Gender) => void;
  className?: string;
  value?: Gender;
}

function GenderPicker({ onChange, className = '', value = Gender.None }: GenderPickerProps) {
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

export default GenderPicker;
