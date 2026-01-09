import { P } from 'src/html';
import { Handedness } from 'wenum';
import { HandednessLabel } from './util';
import { AttributeDisplayProps } from 'src/attribute';

function AttributeCommonHandednessDisplay({ value }: AttributeDisplayProps<Handedness>) {
  return <P text={HandednessLabel[value]} />;
}

export default AttributeCommonHandednessDisplay;
