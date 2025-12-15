import { ReactNode, useState } from 'react';
import { twcn } from 'waujs';
import ExpandableContainerHeader from './ExpandableContainerHeader';
import { Column } from 'src/containers';

export interface ExpandableContainerProps {
  title: ReactNode;
  children?: ReactNode;
  isExpandable?: boolean;
  className?: string;
}

function ExpandableContainer({
  title,
  isExpandable = true,
  className = '',
  children = undefined
}: ExpandableContainerProps) {
  const [isShown, setIsShown] = useState(true);
  const onClick = () => setIsShown((prev) => !prev);

  return (
    <Column className={twcn('gap-0 bg-white rounded-lg px-2', className)}>
      <ExpandableContainerHeader
        isExpandable={isExpandable}
        isShown={isShown}
        title={title}
        onClick={onClick}
      />
      {isShown && <div className="border-t border-dashed">{children}</div>}
    </Column>
  );
}

export default ExpandableContainer;
