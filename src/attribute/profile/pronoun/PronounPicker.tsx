/* eslint-disable no-unused-vars */

import { Pronoun } from 'wenum';
import Picker, { PickerOptionProps } from '../../../pickers/Picker';
import { pronounOptions } from './util';

interface PronounPickerProps {
  onChange: (p: Pronoun) => void;
  className?: string;
  defaultValue?: Pronoun;
}

function PronounPicker({
  onChange,
  className = '',
  defaultValue = Pronoun.None
}: PronounPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={pronounOptions}
      defaultOption={pronounOptions[Number(defaultValue)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default PronounPicker;
