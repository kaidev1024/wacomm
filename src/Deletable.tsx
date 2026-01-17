import { ReactNode } from 'react';
import { CloseIcon } from './icons';
import { StaticRow } from './static';

interface DeletableProps {
  content: ReactNode;
  onDelete: () => void;
  className?: string;
}

function Deletable({ content, onDelete, className = '' }: DeletableProps) {
  return (
    <StaticRow className={className}>
      <CloseIcon onClick={onDelete} />
      {content}
    </StaticRow>
  );
}

export default Deletable;
