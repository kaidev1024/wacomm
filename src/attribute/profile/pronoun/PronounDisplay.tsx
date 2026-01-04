import { P } from 'src/html';
import { Pronoun } from 'wenum';
import { PronounLabels } from './util';

interface PronounDisplayProps {
  pronoun: Pronoun;
}

function PronounDisplay({ pronoun }: PronounDisplayProps) {
  if (pronoun === Pronoun.None) return null;
  return <P className="text-gray-600 text-sm" text={PronounLabels[pronoun]} />;
}

export default PronounDisplay;
