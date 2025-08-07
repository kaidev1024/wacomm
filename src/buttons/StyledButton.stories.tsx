import type { Meta, StoryObj } from '@storybook/react';
import StyledButton from './StyledButton';

const meta: Meta<typeof StyledButton> = {
  title: 'Buttons/StyledButton',
  component: StyledButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    isHighlighted: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Styled Button',
  },
};

export const Highlighted: Story = {
  args: {
    label: 'Highlighted Styled Button',
    isHighlighted: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Styled Button',
    isLoading: true,
  },
};

export const HighlightedAndLoading: Story = {
  args: {
    label: 'Highlighted Loading Button',
    isHighlighted: true,
    isLoading: true,
  },
};