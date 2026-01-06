/* eslint-disable no-unused-vars */
import { LengthUnit } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';

export const LengthUnitLabel: { [key in LengthUnit]: string } = {
  [LengthUnit.Meter]: 'm',
  [LengthUnit.CM]: 'cm',
  [LengthUnit.KM]: 'km',
  [LengthUnit.Foot]: 'ft',
  [LengthUnit.Mile]: 'mi',
  [LengthUnit.Inch]: 'in',
  [LengthUnit.Yard]: 'yd'
};

const lengthUnitOptions: PickerOptionProps[] = [
  { value: LengthUnit.Meter, label: LengthUnitLabel[LengthUnit.Meter] },
  { value: LengthUnit.CM, label: LengthUnitLabel[LengthUnit.CM] },
  { value: LengthUnit.KM, label: LengthUnitLabel[LengthUnit.KM] },
  { value: LengthUnit.Foot, label: LengthUnitLabel[LengthUnit.Foot] },
  { value: LengthUnit.Mile, label: LengthUnitLabel[LengthUnit.Mile] },
  { value: LengthUnit.Inch, label: LengthUnitLabel[LengthUnit.Inch] },
  { value: LengthUnit.Yard, label: LengthUnitLabel[LengthUnit.Yard] }
];

interface LengthUnitPickerProps {
  onChange: (p: LengthUnit) => void;
  className?: string;
  value?: LengthUnit;
}

function LengthUnitPicker({
  onChange,
  className = '',
  value = LengthUnit.Meter
}: LengthUnitPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={lengthUnitOptions}
      defaultOption={lengthUnitOptions[Number(value)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default LengthUnitPicker;
