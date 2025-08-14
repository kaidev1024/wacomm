import type { Meta, StoryObj } from '@storybook/react';
import YesNoButtons from './YesNoButtons';

const meta: Meta<typeof YesNoButtons> = {
  title: 'Buttons/YesNoButtons',
  component: YesNoButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    handleYes: { action: 'yes clicked' },
    handleNo: { action: 'no clicked' },
    yesLabel: {
      control: 'text',
    },
    noLabel: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const YesNo: Story = {
  args: {
    yesLabel: 'Yes',
    noLabel: 'No',
  },
};