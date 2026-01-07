import { P } from 'src/html';
import { Gender } from 'wenum';
import { GenderLabel } from './util';
import { ProfileAttributeDisplayElementProps } from 'src/attribute/attributeUpdater';

function AttributeCommonGenderDisplay({ value }: ProfileAttributeDisplayElementProps<Gender>) {
  return <P className="text-gray-600 text-sm" text={GenderLabel[value]} />;
}

export default AttributeCommonGenderDisplay;
