import { P } from 'src/html';
import { Handedness } from 'wenum';
import { HandednessLabel } from './util';

interface HandednessDisplayProps {
  value: Handedness;
}

function HandednessDisplay({ value }: HandednessDisplayProps) {
  return <P text={HandednessLabel[value]} />;
}

export default HandednessDisplay;
