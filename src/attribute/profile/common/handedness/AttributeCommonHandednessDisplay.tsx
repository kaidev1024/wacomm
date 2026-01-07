import { P } from 'src/html';
import { Handedness } from 'wenum';
import { HandednessLabel } from './util';
import { ProfileAttributeDisplayElementProps } from 'src/attribute';

function AttributeCommonHandednessDisplay({
  value
}: ProfileAttributeDisplayElementProps<Handedness>) {
  return <P text={HandednessLabel[value]} />;
}

export default AttributeCommonHandednessDisplay;
