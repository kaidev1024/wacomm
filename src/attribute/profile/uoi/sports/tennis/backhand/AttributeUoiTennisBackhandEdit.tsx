/* eslint-disable no-unused-vars */
import { TennisBackhand } from 'wenum';
import { tennisBackhandOptions } from './util';
import { Picker, PickerOptionProps } from 'src/pickers';
import { AttributeEditProps } from 'src/attribute';

function AttributeUoiTennisBackhandEdit({
  onChange,
  className = '',
  value = TennisBackhand.None
}: AttributeEditProps<TennisBackhand>) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={tennisBackhandOptions}
      defaultOption={tennisBackhandOptions[Number(value)]}
      onChange={handleChange}
      className={`${className} w-1/2`}
    />
  );
}

export default AttributeUoiTennisBackhandEdit;
