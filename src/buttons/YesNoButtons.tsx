import { ZeroFuncType } from 'waujs';
import StyledButton from "./StyledButton";
import { Row } from 'src/containers';

interface YesNoButtonsProps {
  yesLabel: string;
  noLabel: string;
  handleYes: ZeroFuncType;
  handleNo: ZeroFuncType;
}

export default function YesNoButtons({
  yesLabel,
  noLabel,
  handleYes,
  handleNo
}: YesNoButtonsProps) {
  return (
    <Row className='items-start'>
      <StyledButton
        isHighlighted={true}
        label={yesLabel}
        onClick={handleYes}
      />
      <StyledButton
        isHighlighted={false}
        label={noLabel}
        onClick={handleNo}
      />
    </Row>
  );
}