import { P } from 'src/html';
import { PostPrivacy } from 'wenum';
import { PostPrivacyLabel } from './util';

interface PostPrivacyDisplayProps {
  postprivacy: PostPrivacy;
}

function PostPrivacyDisplay({ postprivacy }: PostPrivacyDisplayProps) {
  return <P className="text-gray-600 text-sm" text={PostPrivacyLabel[postprivacy]} />;
}

export default PostPrivacyDisplay;
