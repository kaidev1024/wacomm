/* eslint-disable no-unused-vars */
import { TennisLevel } from 'wenum';
import { tennisLevelOptions } from './util';
import { Picker, PickerOptionProps } from 'src/pickers';
import { AttributeEditProps } from 'src/attribute';

export default function AttributeUoiTennisLevelEdit({
  onChange,
  className = '',
  value = TennisLevel.None
}: AttributeEditProps<TennisLevel>) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={tennisLevelOptions}
      defaultOption={tennisLevelOptions[Number(value)]}
      onChange={handleChange}
      className={`${className} w-1/2`}
    />
  );
}
