import { AddSvg, SvgSize, CollapseSvg } from 'psvg';
import { ZeroFuncType } from 'pujs';
import { Row } from 'src/containers';
import H1 from 'src/H1';

interface ExpandableContainerHeaderProps {
  isShown: boolean;
  onClick: ZeroFuncType;
  title: string;
  isExpandable?: boolean;
}
function ExpandableContainerHeader({
  isShown,
  onClick,
  title,
  isExpandable = true,
}: ExpandableContainerHeaderProps) {
  return (
    <Row className="text-blue-500 justify-between py-0.5">
      <H1 label={title} />
      {isExpandable && (
        <div onClick={onClick}>
          {isShown ? (
            <CollapseSvg
              size={SvgSize.sm}
              className="fill-gray-888"
            />
          ) : (
            <AddSvg
              size={SvgSize.sm}
              className="fill-gray-888"
            />
          )}
        </div>
      )}

    </Row>
  );
}

export default ExpandableContainerHeader;
