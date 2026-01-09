import { TennisLevel } from 'wenum';
import { TennisLevelLabels } from './util';
import { P } from 'src/html';
import { AttributeDisplayProps } from 'src/attribute';

export default function AttributeUoiTennisLevelDisplay({
  value
}: AttributeDisplayProps<TennisLevel>) {
  return <P text={TennisLevelLabels[value]} />;
}
