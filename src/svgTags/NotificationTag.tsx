import { NotificationSvg, SvgSize } from 'wasvg';
import SvgTag from './SvgTag';

interface NotificationTagProps {
  label: string;
  isLabelHidden: boolean;
  isHighlighted: boolean;
}

export default function NotificationTag({
  label,
  isHighlighted,
  isLabelHidden
}: NotificationTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{
        Svg: NotificationSvg,
        size: SvgSize.lg
      }}
      isLabelHidden={isLabelHidden}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}
