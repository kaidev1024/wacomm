import { ReactNode } from 'react';
import { Row } from 'src/containers';
import { Span } from 'src/html';
import { twcn } from 'waujs';
import {
  AttributeType,
  CategoryName,
  getProfileAttributeLabel,
  InterestName,
  ProfileType
} from 'wenum';
import AttributeUnspecified from './AttributeUnspecified';

interface AttributeDisplayProps {
  profileType: ProfileType;
  categoryName?: CategoryName;
  interestName?: InterestName;
  attributeType: AttributeType;
  className?: string;
  value: ReactNode;
}

function AttributeDisplay({
  profileType,
  categoryName,
  interestName,
  attributeType,
  className = '',
  value
}: AttributeDisplayProps) {
  return (
    <Row className={twcn('AttributeDisplay justify-between', className)}>
      <Span
        text={getProfileAttributeLabel({
          profileType,
          categoryName,
          interestName,
          attributeType
        })}
      />
      {value || <AttributeUnspecified />}
    </Row>
  );
}

export default AttributeDisplay;
