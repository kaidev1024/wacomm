/* eslint-disable no-unused-vars */
import { Picker, PickerOptionProps } from 'src/pickers';
import { PostPrivacy } from 'wenum';
import { postPrivacyOptions } from './util';
import { AttributeEditProps } from 'src/attribute';

function PostPrivacyPicker({
  onChange,
  className = '',
  value = PostPrivacy.Public
}: AttributeEditProps<PostPrivacy>) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={postPrivacyOptions}
      defaultOption={postPrivacyOptions[value as number]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default PostPrivacyPicker;
