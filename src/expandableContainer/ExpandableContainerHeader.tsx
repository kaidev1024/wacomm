import { AddSvg, SvgSize, MinusSvg } from 'wasvg';
import { ZeroFuncType } from 'waujs';
import { Row } from 'src/containers';
import { ReactNode } from 'react';

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
    <Row className="text-blue-500 justify-between py-0.5">
      {title}
      {isExpandable && (
        <div onClick={onClick}>
          {isShown ? (
            <MinusSvg size={SvgSize.sm} className="fill-gray-888" />
          ) : (
            <AddSvg size={SvgSize.sm} className="fill-gray-888" />
          )}
        </div>
      )}
    </Row>
  );
}

export default ExpandableContainerHeader;
