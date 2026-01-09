import { P } from 'src/html';
import { Pronoun } from 'wenum';
import { PronounLabel } from './util';
import { AttributeDisplayProps } from 'src/attribute';

function PronounDisplay({ value }: AttributeDisplayProps<Pronoun>) {
  if (value === Pronoun.None) return null;
  return <P className="text-gray-600 text-sm" text={PronounLabel[value]} />;
}

export default PronounDisplay;
