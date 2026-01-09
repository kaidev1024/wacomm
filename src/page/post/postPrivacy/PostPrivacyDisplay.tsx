import { P } from 'src/html';
import { PostPrivacy } from 'wenum';
import { PostPrivacyLabel } from './util';
import { AttributeDisplayProps } from 'src/attribute';

function PostPrivacyDisplay({ value }: AttributeDisplayProps<PostPrivacy>) {
  return <P className="text-gray-600 text-sm" text={PostPrivacyLabel[value]} />;
}

export default PostPrivacyDisplay;
