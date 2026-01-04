import { P } from 'src/html';
import { Gender } from 'wenum';
import { GenderLabel } from './util';

interface GenderDisplayProps {
  gender: Gender;
}

function GenderDisplay({ gender }: GenderDisplayProps) {
  return <P className="text-gray-600 text-sm" text={GenderLabel[gender]} />;
}

export default GenderDisplay;
