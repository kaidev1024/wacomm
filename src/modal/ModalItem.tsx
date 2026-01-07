import { ReactNode } from 'react';
import { Row } from 'src/containers';
import { Span } from 'src/html';

interface ModalItemProps {
  label: string;
  children: ReactNode;
}

function ModalItem({ label, children }: ModalItemProps) {
  return (
    <Row className="w-full items-start">
      <Span text={label} className="text-gray-600 w-1/5" />
      <div className="w-4/5">{children}</div>
    </Row>
  );
}

export default ModalItem;
