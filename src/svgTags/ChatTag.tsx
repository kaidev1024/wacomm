import { ChatSvg } from "wasvg";
import SvgTag from "./SvgTag";

interface ChatTagProps {
  label: string;
  isLabelHidden: boolean;
  isHighlighted: boolean;
}

export default function ChatTag({
  label,
  isHighlighted,
  isLabelHidden
}: ChatTagProps) {
  return (
    <SvgTag
      label={label}
      icon={{ Svg: ChatSvg }}
      isLabelHidden={isLabelHidden}
      isHighlighted={isHighlighted}
      isVertical
    />
  );
}