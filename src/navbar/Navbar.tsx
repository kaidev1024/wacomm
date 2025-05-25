import { twcn } from 'waujs';
import List from "../List";
import NavbarTab from "./NavbarTab";

interface NavbarProps {
  tabs: TabItemProps[],
  onPick: (name: any) => void;
  pickedTabName: string;
  className?: string;
  tabClassName?: string;
  tabHighlightedClassName?: string;
}

interface TabItemProps {
  name: string;
  label: string;
}

function Navbar({
  tabs,
  onPick,
  pickedTabName,
  className = '',
  tabClassName = '',
  tabHighlightedClassName = '',
}: NavbarProps) {
  const itemRenderer = ({ name, label }: TabItemProps) => {
    return (
      <NavbarTab
        key={name}
        tabName={name}
        isHighlighted={pickedTabName === name}
        onPick={onPick}
        label={label}
        className={tabClassName}
        tabHighlightedClassName={tabHighlightedClassName}
      />
    );
  };
  return (
    <List
      className={twcn('flex flex-row whitespace-nowrap pb-1 overflow-x-auto', className)}
      items={tabs}
      itemRenderer={itemRenderer}
    />
  );
}

export default Navbar;
