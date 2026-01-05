import { P } from 'src/html';
import { PostPrivacy } from 'wenum';
import { PostPrivacyLabel } from './util';

interface PostPrivacyDisplayProps {
  value: PostPrivacy;
}

function PostPrivacyDisplay({ value }: PostPrivacyDisplayProps) {
  return <P className="text-gray-600 text-sm" text={PostPrivacyLabel[value]} />;
}

export default PostPrivacyDisplay;
