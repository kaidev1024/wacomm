import { ReactNode } from 'react';
import { Column, Row } from 'src/containers';
import { Span } from 'src/html';

interface ModalItemProps {
  label: string;
  optional?: ReactNode;
  children: ReactNode;
}

function ModalItem({ label, optional, children }: ModalItemProps) {
  if (optional) {
    return (
      <Row className="w-full items-start">
        <Column className="w-1/5">
          <Span text={label} className="font-semibold" />
          {optional}
        </Column>
        <div className="w-4/5">{children}</div>
      </Row>
    );
  }
  return (
    <Row className="w-full items-start">
      <Span text={label} className="text-gray-600 w-1/5" />
      <div className="w-4/5">{children}</div>
    </Row>
  );
}

export default ModalItem;
