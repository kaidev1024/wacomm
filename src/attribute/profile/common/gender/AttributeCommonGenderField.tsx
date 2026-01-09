import { AttributeTypeCommon, Gender, ProfileType } from 'wenum';
import { AttributeFieldProps, AttributeField } from 'src/attribute';
import AttributeCommonGenderDisplay from './AttributeCommonGenderDisplay';

function AttributeCommonGenderField({ value }: AttributeFieldProps<Gender>) {
  return (
    <AttributeField
      profileType={ProfileType.None}
      attributeType={AttributeTypeCommon.Gender}
      value={<AttributeCommonGenderDisplay value={value} />}
    />
  );
}

export default AttributeCommonGenderField;
