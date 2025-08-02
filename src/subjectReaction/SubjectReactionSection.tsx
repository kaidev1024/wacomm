import { Row } from 'src/containers';
import { MiddleDot } from 'src/separators';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import SubjectReactionsCount from './SubjectReactionsCount';
import { SubjectReactionLabels, SubjectReactionType } from './util';

interface SubjectReactionProps {
  type: SubjectReactionType;
  className?: string;
  textClassName?: string;
  count?: number;
  onClick: ZeroFuncType;
}

export default function SubjectReactionSection({
  type,
  className = '',
  textClassName = 'text-gray-300',
  count = 0,
  onClick
}: SubjectReactionProps) {
  const labels = SubjectReactionLabels[type];
  return (
    <Row className={className} onClick={onClick}>
      <span>{labels.Single}</span>
      <MiddleDot className={textClassName} />
      <SubjectReactionsCount
        singleLabel={labels.Single}
        pluralLabel={labels.Plural}
        count={count}
        onClick={ZeroFunc}
        className={textClassName}
      />
    </Row>
  );
}
