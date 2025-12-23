import type { Meta, StoryObj } from '@storybook/react';
import SaveCancelButtons from './SaveCancelButtons';

const meta: Meta<typeof SaveCancelButtons> = {
  title: 'Buttons/SaveCancelButtons',
  component: SaveCancelButtons,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onSave: { action: 'save clicked' },
    onCancel: { action: 'cancel clicked' },
    saveLabel: {
      control: 'text'
    },
    cancelLabel: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SaveCancel: Story = {
  args: {
    saveLabel: 'Save',
    cancelLabel: 'Cancel'
  }
};
