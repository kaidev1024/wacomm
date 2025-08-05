import type { Meta, StoryObj } from '@storybook/react';
import CacheButton from './CacheButton';

const meta: Meta<typeof CacheButton> = {
  title: 'Buttons/CacheButton',
  component: CacheButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'cache-button-1',
    label: 'Cache Button',
    isHighlighted: false
  }
};

export const Highlighted: Story = {
  args: {
    id: 'cache-button-2',
    label: 'Highlighted Cache Button',
    isHighlighted: true
  }
};