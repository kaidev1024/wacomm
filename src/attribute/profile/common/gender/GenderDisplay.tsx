import { P } from 'src/html';
import { Gender } from 'wenum';
import { GenderLabel } from './util';

interface GenderDisplayProps {
  value: Gender;
}

function GenderDisplay({ value }: GenderDisplayProps) {
  return <P className="text-gray-600 text-sm" text={GenderLabel[value]} />;
}

export default GenderDisplay;
