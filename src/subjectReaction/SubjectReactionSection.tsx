import { ClickableRow, Row } from 'src/containers';
import { MiddleDot } from 'src/separators';
import { ZeroFunc, ZeroFuncType } from 'waujs';
import SubjectReactionsCount from './SubjectReactionsCount';
import { SubjectReactionLabel, SubjectReactionType } from './util';

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
  textClassName = 'text-gray-500 text-sm',
  count = 0,
  onClick
}: SubjectReactionProps) {
  const labels = SubjectReactionLabel[type];
  return (
    <ClickableRow className={className} onClick={onClick}>
      <span className={textClassName}>{labels.Single}</span>
      {count > 0 && (
        <>
          <MiddleDot className="text-gray-300" />
          <SubjectReactionsCount
            singleLabel={labels.Single}
            pluralLabel={labels.Plural}
            count={count}
            onClick={ZeroFunc}
            className={textClassName}
          />
        </>
      )}
    </ClickableRow>
  );
}
