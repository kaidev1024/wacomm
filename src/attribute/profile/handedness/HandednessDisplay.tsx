import { P } from 'src/html';
import { Handedness } from 'wenum';
import { HandednessLabel } from './util';

interface HandednessDisplayProps {
  handedness: Handedness;
}

function HandednessDisplay({ handedness }: HandednessDisplayProps) {
  return <P className="text-gray-600 text-sm" text={HandednessLabel[handedness]} />;
}

export default HandednessDisplay;
