import { ProfilePrivacy } from 'wenum';

export const ProfilePrivacyLabel: Record<ProfilePrivacy, string> = {
  [ProfilePrivacy.Public]: 'Public',
  [ProfilePrivacy.Private]: 'Private',
  [ProfilePrivacy.Internal]: 'Internal',
};

export const profilePrivacyOptions = [
  {
    value: ProfilePrivacy.Public,
    label: ProfilePrivacyLabel[ProfilePrivacy.Public]
  },
  {
    value: ProfilePrivacy.Private,
    label: ProfilePrivacyLabel[ProfilePrivacy.Private]
  },
  {
    value: ProfilePrivacy.Internal,
    label: ProfilePrivacyLabel[ProfilePrivacy.Internal]
  }
];