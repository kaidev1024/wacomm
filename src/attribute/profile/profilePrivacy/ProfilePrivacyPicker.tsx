/* eslint-disable no-unused-vars */
import { Picker, PickerOptionProps } from 'src/pickers';
import { ProfilePrivacy } from 'wenum';
import { profilePrivacyOptions } from './util';
import { ProfileAttributeEditElementProps } from 'src/attribute';

function ProfilePrivacyPicker({
  onChange,
  className = '',
  value = ProfilePrivacy.Public
}: ProfileAttributeEditElementProps<ProfilePrivacy>) {
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
