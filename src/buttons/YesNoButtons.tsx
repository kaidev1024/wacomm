import { ZeroFuncType } from 'waujs';
import StyledButton from './StyledButton';
import { Row } from 'src/containers';

interface YesNoButtonsProps {
  yesLabel: string;
  noLabel: string;
  handleYes: ZeroFuncType;
  handleNo: ZeroFuncType;
  isYesDisabled: boolean;
  isNoDisabled: boolean;
}

export default function YesNoButtons({
  yesLabel,
  noLabel,
  handleYes,
  handleNo,
  isYesDisabled,
  isNoDisabled
}: YesNoButtonsProps) {
  return (
    <Row className="items-start">
      <StyledButton
        isHighlighted={true}
        label={yesLabel}
        onClick={handleYes}
        disabled={isYesDisabled}
      />
      <StyledButton
        isHighlighted={false}
        label={noLabel}
        onClick={handleNo}
        disabled={isNoDisabled}
      />
    </Row>
  );
}
