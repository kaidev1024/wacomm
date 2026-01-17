import { ReactNode } from 'react';
import { Span } from 'src/html';
import { StaticColumn, StaticRow } from 'src/static';

interface ModalItemProps {
  label: string;
  optional?: ReactNode;
  children: ReactNode;
}

function ModalItem({ label, optional, children }: ModalItemProps) {
  if (optional) {
    return (
      <StaticRow className="w-full items-start">
        <StaticColumn className="w-1/5">
          <Span text={label} className="font-semibold" />
          {optional}
        </StaticColumn>
        <div className="w-4/5">{children}</div>
      </StaticRow>
    );
  }
  return (
    <StaticRow className="w-full items-start">
      <Span text={label} className="text-gray-600 w-1/5" />
      <div className="w-4/5">{children}</div>
    </StaticRow>
  );
}

export default ModalItem;
