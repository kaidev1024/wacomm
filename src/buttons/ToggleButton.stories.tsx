import type { Meta, StoryObj } from '@storybook/react';
import ToggleButton from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Buttons/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked toggle',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked toggle',
    checked: true,
    disabled: true,
  },
};