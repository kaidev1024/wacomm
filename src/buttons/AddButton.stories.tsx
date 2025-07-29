import type { Meta, StoryObj } from '@storybook/react';
import AddButton from './AddButton';

const meta: Meta<typeof AddButton> = {
  title: 'Buttons/AddButton',
  component: AddButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NamedLabel: Story = {
  args: {
    label: 'Named Label'
  },
};