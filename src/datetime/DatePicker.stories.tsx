import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './DatePicker';
import dayjs from 'dayjs';
import { DateTime } from './util';

const DatePickerWrapper = (args: any) => {
  const [value, setValue] = useState<DateTime>(args.value);
  return <DatePicker value={String(value)} setValue={setValue} />;
};

const meta: Meta<typeof DatePicker> = {
  title: 'DateTime/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: DatePickerWrapper,
  argTypes: {
    value: {
      control: false,
      description: 'Selected date value (Dayjs object or null)'
    },
    setValue: {
      control: false,
      description: 'Function to update the selected date'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '2024-01-15'
  }
};

export const EmptyValue: Story = {
  args: {
    value: ''
  }
};
