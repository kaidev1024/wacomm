/* eslint-disable no-unused-vars */

import { Picker, PickerOptionProps } from 'src/pickers';
import { PostPrivacy } from 'wenum';
import { postPrivacyOptions } from './util';

function PostPrivacyPicker() {
  const handleChange = (option: PickerOptionProps) => {};

  return (
    <Picker
      options={postPrivacyOptions}
      defaultOption={postPrivacyOptions[PostPrivacy.Public]}
      onChange={handleChange}
    />
  );
}

export default PostPrivacyPicker;
