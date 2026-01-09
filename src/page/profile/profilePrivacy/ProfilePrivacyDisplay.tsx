import { P } from 'src/html';
import { ProfilePrivacy } from 'wenum';
import { ProfilePrivacyLabel } from './util';
import { AttributeDisplayProps } from 'src/attribute/attributeUpdater';

interface ProfilePrivacyDisplayProps {
  value: ProfilePrivacy;
}

function ProfilePrivacyDisplay({ value }: AttributeDisplayProps<ProfilePrivacy>) {
  return <P className="text-gray-600 text-sm" text={ProfilePrivacyLabel[value]} />;
}

export default ProfilePrivacyDisplay;
