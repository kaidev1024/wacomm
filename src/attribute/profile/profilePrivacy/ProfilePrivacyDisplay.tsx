import { P } from 'src/html';
import { ProfilePrivacy } from 'wenum';
import { ProfilePrivacyLabel } from './util';

interface ProfilePrivacyDisplayProps {
  value: ProfilePrivacy;
}

function ProfilePrivacyDisplay({ value }: ProfilePrivacyDisplayProps) {
  return <P className="text-gray-600 text-sm" text={ProfilePrivacyLabel[value]} />;
}

export default ProfilePrivacyDisplay;
