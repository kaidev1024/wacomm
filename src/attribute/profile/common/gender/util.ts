import { Gender } from 'wenum';

export const GenderLabel: Record<Gender, string> = {
  [Gender.None]: 'Unspecified',
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
};

export const genderOptions = [
  {
    value: Gender.None,
    label: GenderLabel[Gender.None],
  },
  {
    value: Gender.Male,
    label: GenderLabel[Gender.Male],
  },
  {
    value: Gender.Female,
    label: GenderLabel[Gender.Female],
  },
];