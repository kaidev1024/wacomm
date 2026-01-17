import { ReactNode } from 'react';
import { ArrayUtil, twcn } from 'waujs';
import { StaticColumn } from './static';
import { H1, List } from './html';
import NotFound from './NotFound';

interface ProfileListProps {
  title?: string;
  notFoundLabel: string;
  items: any[];
  // eslint-disable-next-line no-unused-vars
  itemRenderer: (...args: any[]) => ReactNode;
  className?: string;
}

function ProfileList({
  title = '',
  notFoundLabel,
  items,
  itemRenderer,
  className = ''
}: ProfileListProps) {
  return (
    <StaticColumn className={twcn('ProfileList bg-white p-2 rounded-lg w-full ', className)}>
      <H1 label={title} className="border-b border-gray-300 pb-1 w-full" />
      {ArrayUtil.IsZeroArray(items) ? (
        <NotFound label={notFoundLabel} />
      ) : (
        <List className="w-full" itemRenderer={itemRenderer} items={items} />
      )}
    </StaticColumn>
  );
}

export default ProfileList;
