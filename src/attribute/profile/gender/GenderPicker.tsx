/* eslint-disable no-unused-vars */

import { Gender } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { genderOptions } from './util';

interface GenderPickerProps {
  onChange: (p: Gender) => void;
  className?: string;
  defaultValue?: Gender;
}

function GenderPicker({ onChange, className = '', defaultValue = Gender.None }: GenderPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={genderOptions}
      defaultOption={genderOptions[Number(defaultValue)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default GenderPicker;
