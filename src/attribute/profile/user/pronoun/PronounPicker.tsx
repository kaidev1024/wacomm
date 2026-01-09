/* eslint-disable no-unused-vars */

import { Pronoun } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';
import { pronounOptions } from './util';
import { AttributeEditProps } from 'src/attribute';

function PronounPicker({
  onChange,
  className = '',
  value = Pronoun.None
}: AttributeEditProps<Pronoun>) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={pronounOptions}
      defaultOption={pronounOptions[Number(value)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default PronounPicker;
