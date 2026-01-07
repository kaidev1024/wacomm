/* eslint-disable no-unused-vars */
import { TennisLevel } from 'wenum';
import { tennisLevelOptions } from './util';
import { Picker, PickerOptionProps } from 'src/pickers';
import { ProfileAttributeEditElementProps } from 'src/attribute/attributeUpdater';

function TennisLevelEdit({
  onChange,
  className = '',
  value = TennisLevel.None
}: ProfileAttributeEditElementProps<TennisLevel>) {
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

export default TennisLevelEdit;
