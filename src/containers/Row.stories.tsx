import type { Meta, StoryObj } from '@storybook/react';
import Row from './Row';

const meta: Meta<typeof Row> = {
  title: 'Containers/Row',
  component: Row,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-blue-100 rounded">Item 1</div>
        <div className="p-4 bg-green-100 rounded">Item 2</div>
        <div className="p-4 bg-yellow-100 rounded">Item 3</div>
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-red-100 rounded">Item 1</div>
        <div className="p-4 bg-orange-100 rounded">Item 2</div>
      </>
    ),
    className: 'p-6 border-2 border-gray-300 rounded-lg bg-gray-50',
  },
};