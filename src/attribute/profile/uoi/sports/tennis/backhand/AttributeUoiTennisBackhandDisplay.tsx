import { TennisBackhand } from 'wenum';
import { TennisBackhandLabel } from './util';
import { P } from 'src/html';
import { AttributeDisplayProps } from 'src/attribute';

export default function AttributeUoiTennisBackhandDisplay({
  value
}: AttributeDisplayProps<TennisBackhand>) {
  return <P text={TennisBackhandLabel[value]} />;
}
