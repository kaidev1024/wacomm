/* eslint-disable no-unused-vars */

import { Picker, PickerOptionProps } from 'src/pickers';
import { PostPrivacy } from 'wenum';
import { postPrivacyOptions } from './util';

interface PostPrivacyPickerProps {
  onChange: (p: PostPrivacy) => void;
  className?: string;
  value?: PostPrivacy;
}

function PostPrivacyPicker({
  onChange,
  className = '',
  value = PostPrivacy.Public
}: PostPrivacyPickerProps) {
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
