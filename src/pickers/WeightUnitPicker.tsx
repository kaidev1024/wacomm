/* eslint-disable no-unused-vars */
import { WeightUnit } from 'wenum';
import { Picker, PickerOptionProps } from 'src/pickers';

export const WeightUnitLabel: { [key in WeightUnit]: string } = {
  [WeightUnit.KG]: 'kg',
  [WeightUnit.Gram]: 'g',
  [WeightUnit.LB]: 'lb',
  [WeightUnit.Ounce]: 'oz'
};

const weightUnitOptions: PickerOptionProps[] = [
  { value: WeightUnit.KG, label: WeightUnitLabel[WeightUnit.KG] },
  { value: WeightUnit.Gram, label: WeightUnitLabel[WeightUnit.Gram] },
  { value: WeightUnit.LB, label: WeightUnitLabel[WeightUnit.LB] },
  { value: WeightUnit.Ounce, label: WeightUnitLabel[WeightUnit.Ounce] }
];

interface WeightUnitPickerProps {
  onChange: (p: WeightUnit) => void;
  className?: string;
  value?: WeightUnit;
}

function WeightUnitPicker({
  onChange,
  className = '',
  value = WeightUnit.KG
}: WeightUnitPickerProps) {
  const handleChange = (option: PickerOptionProps) => {
    onChange(option.value);
  };

  return (
    <Picker
      options={weightUnitOptions}
      defaultOption={weightUnitOptions[Number(value)]}
      onChange={handleChange}
      className={className}
    />
  );
}

export default WeightUnitPicker;
