/* eslint-disable no-unused-vars */

import { Picker, PickerOptionProps } from 'src/pickers';
import { ProfilePrivacy } from 'wenum';
import { profilePrivacyOptions } from './util';

interface ProfilePrivacyPickerProps {
  onChange: (p: ProfilePrivacy) => void;
  className?: string;
  value?: ProfilePrivacy;
}

function ProfilePrivacyPicker({
  onChange,
  className = '',
  value = ProfilePrivacy.Public
}: ProfilePrivacyPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={profilePrivacyOptions}
      defaultOption={profilePrivacyOptions[value as number]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default ProfilePrivacyPicker;
