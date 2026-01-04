import { Gender, Pronoun } from 'wenum';

export const GenderLabels: Record<Gender, string> = {
  [Gender.None]: 'Unspecified',
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
};

export const genderOptions = [
  {
    value: Gender.None,
    label: GenderLabels[Gender.None],
  },
  {
    value: Gender.Male,
    label: GenderLabels[Gender.Male],
  },
  {
    value: Gender.Female,
    label: GenderLabels[Gender.Female],
  },
];