/* eslint-disable no-unused-vars */

import { Picker, PickerOptionProps } from 'src/pickers';
import { ProfilePrivacy } from 'wenum';
import { profilePrivacyOptions } from './util';

function ProfilePrivacyPicker() {
  const handleChange = (option: PickerOptionProps) => {};

  return (
    <Picker
      options={profilePrivacyOptions}
      defaultOption={profilePrivacyOptions[ProfilePrivacy.Public]}
      onChange={handleChange}
    />
  );
}

export default ProfilePrivacyPicker;
