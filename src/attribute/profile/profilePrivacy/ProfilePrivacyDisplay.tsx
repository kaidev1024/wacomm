import { P } from 'src/html';
import { ProfilePrivacy } from 'wenum';
import { ProfilePrivacyLabel } from './util';
import { ProfileAttributeDisplayElementProps } from 'src/attribute/attributeUpdater';

interface ProfilePrivacyDisplayProps {
  value: ProfilePrivacy;
}

function ProfilePrivacyDisplay({ value }: ProfileAttributeDisplayElementProps<ProfilePrivacy>) {
  return <P className="text-gray-600 text-sm" text={ProfilePrivacyLabel[value]} />;
}

export default ProfilePrivacyDisplay;
