import type { Meta, StoryObj } from '@storybook/react';
import SvgButton from './SvgButton';
import { SvgSize } from 'wasvg';

// Mock SVG component for storybook
const MockSvg = ({ size, className }: { size?: string; className?: string }) => (
  <svg
    width={size || '16'}
    height={size || '16'}
    className={className}
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.707 5.293a1 1 0 010 1.414L9.414 9l2.293 2.293a1 1 0 01-1.414 1.414L8 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L6.586 9 4.293 6.707a1 1 0 011.414-1.414L8 7.586l2.293-2.293a1 1 0 011.414 0z"/>
  </svg>
);

const meta: Meta<typeof SvgButton> = {
  title: 'Buttons/SvgButton',
  component: SvgButton,
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
    isVertical: {
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
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: {
      Svg: MockSvg,
    },
    label: 'SVG Button',
  },
};

export const Highlighted: Story = {
  args: {
    icon: {
      Svg: MockSvg,
    },
    label: 'Highlighted SVG Button',
    isHighlighted: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: {
      Svg: MockSvg,
    },
    label: 'Disabled SVG Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    icon: {
      Svg: MockSvg,
    },
    label: 'Loading SVG Button',
    isLoading: true,
  },
};

export const Vertical: Story = {
  args: {
    icon: {
      Svg: MockSvg,
    },
    label: 'Vertical Layout',
    isVertical: true,
  },
};

export const IconOnly: Story = {
  args: {
    icon: {
      Svg: MockSvg,
    },
    label: '',
  },
};

export const LargeIcon: Story = {
  args: {
    icon: {
      Svg: MockSvg,
      size: SvgSize.lg,
    },
    label: 'Large Icon',
  },
};

export const CustomStyling: Story = {
  args: {
    icon: {
      Svg: MockSvg,
      className: 'fill-green-600',
    },
    label: 'Custom Styled',
    className: 'bg-green-100 border-green-300',
    labelClassName: 'text-green-700 font-bold',
  },
};