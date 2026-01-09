import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
  title: 'Containers/Container',
  component: Container,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    isVertical: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalDefault: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-blue-100 rounded">Item 1</div>
        <div className="p-4 bg-green-100 rounded">Item 2</div>
        <div className="p-4 bg-yellow-100 rounded">Item 3</div>
      </>
    ),
    isVertical: false
  }
};

export const VerticalDefault: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-blue-100 rounded">Item 1</div>
        <div className="p-4 bg-green-100 rounded">Item 2</div>
        <div className="p-4 bg-yellow-100 rounded">Item 3</div>
      </>
    ),
    isVertical: true
  }
};

export const HorizontalWithCustomClassName: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-red-100 rounded">Item 1</div>
        <div className="p-4 bg-orange-100 rounded">Item 2</div>
      </>
    ),
    className: 'p-6 border-2 border-gray-300 rounded-lg bg-gray-50',
    isVertical: false
  }
};

export const VerticalWithCustomClassName: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-purple-100 rounded">Item 1</div>
        <div className="p-4 bg-pink-100 rounded">Item 2</div>
      </>
    ),
    className: 'p-6 border-2 border-blue-300 rounded-lg bg-blue-50',
    isVertical: true
  }
};
