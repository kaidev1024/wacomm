import { Handedness } from 'wenum';

export const HandednessLabel = {
  [Handedness.None]: 'Unspecified',
  [Handedness.Left]: 'Left',
  [Handedness.Right]: 'Right',
};

export const handednessOptions = [
  {
    value: Handedness.None,
    label: HandednessLabel[Handedness.None],
  },
  {
    value: Handedness.Left,
    label: HandednessLabel[Handedness.Left],
  },
  {
    value: Handedness.Right,
    label: HandednessLabel[Handedness.Right],
  },
];