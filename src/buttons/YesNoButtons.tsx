import { ZeroFuncType } from 'pujs';
import Row from 'src/Row';
import StyledButton from "./StyledButton";

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