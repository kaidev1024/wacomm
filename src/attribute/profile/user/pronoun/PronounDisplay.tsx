import { P } from 'src/html';
import { Pronoun } from 'wenum';
import { PronounLabel } from './util';
import { ProfileAttributeDisplayElementProps } from 'src/attribute';

function PronounDisplay({ value }: ProfileAttributeDisplayElementProps<Pronoun>) {
  if (value === Pronoun.None) return null;
  return <P className="text-gray-600 text-sm" text={PronounLabel[value]} />;
}

export default PronounDisplay;
