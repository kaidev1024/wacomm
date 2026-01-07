import { TennisBackhand } from 'wenum';

export const TennisBackhandLabel = {
  [TennisBackhand.Single]: 'Single-handed',
  [TennisBackhand.Double]: 'Double-handed',
  [TennisBackhand.Both]: 'Both',
  [TennisBackhand.None]: 'Unspecified'
};

export const tennisBackhandOptions = [
  {
    value: TennisBackhand.None,
    label: TennisBackhandLabel[TennisBackhand.None]
  },
  {
    value: TennisBackhand.Single,
    label: TennisBackhandLabel[TennisBackhand.Single]
  },
  {
    value: TennisBackhand.Double,
    label: TennisBackhandLabel[TennisBackhand.Double]
  },
  {
    value: TennisBackhand.Both,
    label: TennisBackhandLabel[TennisBackhand.Both]
  }
];
