import { PostPrivacy } from 'wenum';

export const PostPrivacyLabel: Record<PostPrivacy, string> = {
  [PostPrivacy.Public]: 'Public',
  [PostPrivacy.Private]: 'Private',
  [PostPrivacy.Internal]: 'Internal',
};

export const postPrivacyOptions = [
  {
    value: PostPrivacy.Public,
    label: PostPrivacyLabel[PostPrivacy.Public]
  },
  {
    value: PostPrivacy.Private,
    label: PostPrivacyLabel[PostPrivacy.Private]
  },
  {
    value: PostPrivacy.Internal,
    label: PostPrivacyLabel[PostPrivacy.Internal]
  }
];