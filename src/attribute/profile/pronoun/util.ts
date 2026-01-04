import { Pronoun } from 'wenum';

export const PronounLabels: Record<Pronoun, string> = {
  [Pronoun.None]: 'Unspecified',
  [Pronoun.He]: 'He/Him',
  [Pronoun.She]: 'She/Her',
};

export const pronounOptions = [
  {
    value: Pronoun.None,
    label: PronounLabels[Pronoun.None]
  },
  {
    value: Pronoun.He,
    label: PronounLabels[Pronoun.He]
  },
  {
    value: Pronoun.She,
    label: PronounLabels[Pronoun.She]
  }
];