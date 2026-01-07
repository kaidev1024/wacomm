import { TennisLevel } from 'wenum';

export const TennisLevelLabels = {
  [TennisLevel.None]: 'Unspecified',
  [TennisLevel.TwoBelow]: '2.0 and below',
  [TennisLevel.TwoFive]: '2.5',
  [TennisLevel.Three]: '3.0',
  [TennisLevel.ThreeFive]: '3.5',
  [TennisLevel.Four]: '4.0',
  [TennisLevel.FourFive]: '4.5',
  [TennisLevel.Five]: '5.0',
  [TennisLevel.FiveFive]: '5.5',
  [TennisLevel.SixAbove]: '6.0 and above'
};

export const tennisLevelOptions = [
  {
    value: TennisLevel.None,
    label: TennisLevelLabels[TennisLevel.None]
  },
  {
    value: TennisLevel.TwoBelow,
    label: TennisLevelLabels[TennisLevel.TwoBelow]
  },
  {
    value: TennisLevel.TwoFive,
    label: TennisLevelLabels[TennisLevel.TwoFive]
  },
  {
    value: TennisLevel.Three,
    label: TennisLevelLabels[TennisLevel.Three]
  },
  {
    value: TennisLevel.ThreeFive,
    label: TennisLevelLabels[TennisLevel.ThreeFive]
  },
  {
    value: TennisLevel.Four,
    label: TennisLevelLabels[TennisLevel.Four]
  },
  {
    value: TennisLevel.FourFive,
    label: TennisLevelLabels[TennisLevel.FourFive]
  },
  {
    value: TennisLevel.Five,
    label: TennisLevelLabels[TennisLevel.Five]
  },
  {
    value: TennisLevel.FiveFive,
    label: TennisLevelLabels[TennisLevel.FiveFive]
  },
  {
    value: TennisLevel.SixAbove,
    label: TennisLevelLabels[TennisLevel.SixAbove]
  }
];
