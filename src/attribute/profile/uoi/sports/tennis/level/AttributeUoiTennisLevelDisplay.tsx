import { TennisLevel } from 'wenum';
import { TennisLevelLabels } from './util';
import { P } from 'src/html';
import { ProfileAttributeDisplayElementProps } from 'src/attribute/attributeUpdater';

export default function AttributeUoiTennisLevelDisplay({
  value
}: ProfileAttributeDisplayElementProps<TennisLevel>) {
  return <P text={TennisLevelLabels[value]} />;
}
