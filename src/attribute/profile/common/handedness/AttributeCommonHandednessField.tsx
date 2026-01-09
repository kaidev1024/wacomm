import { AttributeTypeCommon, Handedness, ProfileType } from 'wenum';
import { AttributeFieldProps, AttributeField } from 'src/attribute';
import AttributeCommonHandednessDisplay from './AttributeCommonHandednessDisplay';

function AttributeCommonHandednessField({ value }: AttributeFieldProps<Handedness>) {
  return (
    <AttributeField
      profileType={ProfileType.None}
      attributeType={AttributeTypeCommon.Handedness}
      value={<AttributeCommonHandednessDisplay value={value} />}
    />
  );
}

export default AttributeCommonHandednessField;
