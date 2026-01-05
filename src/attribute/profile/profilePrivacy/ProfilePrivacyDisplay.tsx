import { P } from 'src/html';
import { ProfilePrivacy } from 'wenum';
import { ProfilePrivacyLabel } from './util';

interface ProfilePrivacyDisplayProps {
  profileprivacy: ProfilePrivacy;
}

function ProfilePrivacyDisplay({ profileprivacy }: ProfilePrivacyDisplayProps) {
  return <P className="text-gray-600 text-sm" text={ProfilePrivacyLabel[profileprivacy]} />;
}

export default ProfilePrivacyDisplay;
