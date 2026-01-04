/* eslint-disable no-unused-vars */

import { Pronoun } from 'wenum';
import Picker, { PickerOptionProps } from './Picker';

interface PronounPickerProps {
  onChange: (p: Pronoun) => void;
  className?: string;
  defaultValue?: Pronoun;
}

const options = [
  {
    value: Pronoun.None,
    label: 'Unspecified'
  },
  {
    value: Pronoun.He,
    label: 'He/Him'
  },
  {
    value: Pronoun.She,
    label: 'She/Her'
  }
];

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
      options={options}
      defaultOption={options[Number(defaultValue)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default PronounPicker;
