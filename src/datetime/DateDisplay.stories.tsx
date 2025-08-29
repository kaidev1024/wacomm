import type { Meta, StoryObj } from '@storybook/react';
import DateDisplay from './DateDisplay';

const meta: Meta<typeof DateDisplay> = {
  title: 'DateTime/DateDisplay',
  component: DateDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    date: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '2024-01-15T10:30:00.000Z',
  },
};

export const EmptyDate: Story = {
  args: {
    date: '',
  },
};

export const InvalidDate: Story = {
  args: {
    date: '2024',
  },
};