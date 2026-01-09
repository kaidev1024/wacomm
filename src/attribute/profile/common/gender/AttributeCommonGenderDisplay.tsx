import { P } from 'src/html';
import { Gender } from 'wenum';
import { GenderLabel } from './util';
import { AttributeDisplayProps } from 'src/attribute';

function AttributeCommonGenderDisplay({ value }: AttributeDisplayProps<Gender>) {
  return <P className="text-gray-600 text-sm" text={GenderLabel[value]} />;
}

export default AttributeCommonGenderDisplay;
