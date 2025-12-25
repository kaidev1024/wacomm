import type { Meta, StoryObj } from '@storybook/react';
import InterestTag from './InterestTag';
import { CategoryName, SportsInterestName } from 'wenum';

const meta: Meta<typeof InterestTag> = {
  title: 'svgTags/InterestTag',
  component: InterestTag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'tennis',
    categoryName: CategoryName.Sports,
    interestName: SportsInterestName.Tennis,
    isHighlighted: false
  }
};
