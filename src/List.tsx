import { ReactNode, useEffect, useRef } from 'react';

interface ListProps {
  items: any[];
  // eslint-disable-next-line no-unused-vars
  itemRenderer: (...args: any[]) => ReactNode;
  className?: string;
  fallback?: any;
  autoScroll?: boolean;
}

function List({
  items,
  itemRenderer,
  className = '',
  fallback = undefined,
  autoScroll = false
}: ListProps) {
  if (!items || items.length === 0) return fallback;

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (autoScroll) {
      listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [items, autoScroll]);

  return (
    <ul className={className} ref={listRef}>
      {items.map(itemRenderer)}
    </ul>
  );
}

export default List;
