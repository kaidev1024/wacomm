import { MenuSvg, SvgSize } from "wasvg";
import SvgTooltip from "./SvgTooltip";
import { ZeroFuncType } from "waujs";

interface MenuTooltipProps {
  onClick: ZeroFuncType;
  label: string;
}

export default function MenuTooltip({
  onClick, label
}: MenuTooltipProps) {
  return (
    <SvgTooltip
      icon={{ Svg: MenuSvg, className: 'fill-gray-600', size: SvgSize.lg }}
      onClick={onClick}
      label={label}
    />
  );
}