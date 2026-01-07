import { TennisBackhand } from 'wenum';
import { TennisBackhandLabel } from './util';
import { P } from 'src/html';
import { ProfileAttributeDisplayElementProps } from 'src/attribute/attributeUpdater';

export default function TennisBackhandDisplay({
  value
}: ProfileAttributeDisplayElementProps<TennisBackhand>) {
  return <P text={TennisBackhandLabel[value]} />;
}
