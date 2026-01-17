import { AddSvg, SvgSize, MinusSvg } from 'wasvg';
import { ZeroFuncType } from 'waujs';
import { Row } from 'src/containers';
import { ReactNode } from 'react';
import { ClickableDiv, StaticRow } from 'src';

interface ExpandableContainerHeaderProps {
  isShown: boolean;
  onClick: ZeroFuncType;
  title: ReactNode;
  isExpandable?: boolean;
}

function ExpandableContainerHeader({
  isShown,
  onClick,
  title,
  isExpandable = true
}: ExpandableContainerHeaderProps) {
  return (
    <StaticRow className="text-blue-500 justify-between py-0.5">
      {title}
      {isExpandable && (
        <ClickableDiv onClick={onClick}>
          {isShown ? (
            <MinusSvg size={SvgSize.sm} className="fill-gray-888" />
          ) : (
            <AddSvg size={SvgSize.sm} className="fill-gray-888" />
          )}
        </ClickableDiv>
      )}
    </StaticRow>
  );
}

export default ExpandableContainerHeader;
