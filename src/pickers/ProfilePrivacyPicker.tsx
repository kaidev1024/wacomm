/* eslint-disable no-unused-vars */

import Picker, { PickerOptionProps } from './Picker';
import { ProfilePrivacy } from 'wenum';

const options = [
  {
    value: ProfilePrivacy.Public,
    label: 'Public'
  },
  {
    value: ProfilePrivacy.Private,
    label: 'Private'
  },
  {
    value: ProfilePrivacy.Internal,
    label: 'Internal'
  }
];

function ProfilePrivacyPicker() {
  const handleChange = (option: PickerOptionProps) => {};

  return (
    <Picker
      options={options}
      defaultOption={options[ProfilePrivacy.Public]} // TODO: need to improve
      onChange={handleChange}
    />
  );
}

export default ProfilePrivacyPicker;
