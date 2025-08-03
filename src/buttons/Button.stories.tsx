import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    isHighlighted: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    labelClassName: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Highlighted: Story = {
  args: {
    label: 'Highlighted Button',
    isHighlighted: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    isLoading: true,
  },
};

export const CustomStyling: Story = {
  args: {
    label: 'Custom Button',
    className: 'bg-green-100 border-green-300',
    labelClassName: 'text-green-700 font-bold',
  },
};