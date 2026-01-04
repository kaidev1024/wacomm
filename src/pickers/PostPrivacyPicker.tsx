/* eslint-disable no-unused-vars */
import Picker, { PickerOptionProps } from './Picker';
import { PostPrivacy } from 'wenum';

interface PrivacyPickerProps {
  onChange: (p: PostPrivacy) => void;
  className?: string;
  privacy?: PostPrivacy;
  disabled?: boolean;
}

const options: PickerOptionProps[] = [
  {
    value: PostPrivacy.Public,
    label: 'Public'
  },
  {
    value: PostPrivacy.Private,
    label: 'Private'
  },
  {
    value: PostPrivacy.Internal,
    label: 'Internal'
  }
];

function PostPrivacyPicker({
  onChange,
  className = '',
  privacy = PostPrivacy.Public,
  disabled
}: PrivacyPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };
  return (
    <Picker
      options={options}
      defaultOption={options[privacy]}
      onChange={handleChange}
      className={className}
      disabled={disabled}
    />
  );
}

export default PostPrivacyPicker;
