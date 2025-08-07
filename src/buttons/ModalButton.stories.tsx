import type { Meta, StoryObj } from '@storybook/react';
import ModalButton from './ModalButton';

const meta: Meta<typeof ModalButton> = {
  title: 'Buttons/ModalButton',
  component: ModalButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Open Modal',
  }
};

export const SimpleText: Story = {
  args: {
    label: 'Simple Modal',
    content: 'This is just plain text content in the modal.'
  }
};