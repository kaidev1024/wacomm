import { Pronoun } from 'wenum';

export const PronounLabel: Record<Pronoun, string> = {
  [Pronoun.None]: 'Unspecified',
  [Pronoun.He]: 'He/Him',
  [Pronoun.She]: 'She/Her',
};

export const pronounOptions = [
  {
    value: Pronoun.None,
    label: PronounLabel[Pronoun.None]
  },
  {
    value: Pronoun.He,
    label: PronounLabel[Pronoun.He]
  },
  {
    value: Pronoun.She,
    label: PronounLabel[Pronoun.She]
  }
];