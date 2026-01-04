import { P } from 'src/html';
import { Pronoun } from 'wenum';
import { PronounLabel } from './util';

interface PronounDisplayProps {
  pronoun: Pronoun;
}

function PronounDisplay({ pronoun }: PronounDisplayProps) {
  if (pronoun === Pronoun.None) return null;
  return <P className="text-gray-600 text-sm" text={PronounLabel[pronoun]} />;
}

export default PronounDisplay;
