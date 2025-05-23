import { twcn } from 'pujs';

interface NavbarTabProps {
  isHighlighted: boolean;
  tabName: string;
  onPick: (tabName: string) => void;
  label: string;
  className: string;
  tabHighlightedClassName?: string;
}

function NavbarTab({
  tabName,
  isHighlighted,
  onPick,
  label,
  className,
  tabHighlightedClassName
}: NavbarTabProps) {
  return (
    <div
      className={twcn('px-3 py-0.5 text-gray-600 text-center', className, isHighlighted ? (tabHighlightedClassName || 'border-blue-500 border-b-2 text-blue-500') : '')}
      onClick={() => onPick(tabName)}
    >
      {label}
    </div>
  );
}

export default NavbarTab;