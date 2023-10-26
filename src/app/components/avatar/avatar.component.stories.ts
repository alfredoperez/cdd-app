import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AvatarComponent> = {
  component: AvatarComponent,
  title: 'AvatarComponent',
};
export default meta;
type Story = StoryObj<AvatarComponent>;

export const Primary: Story = {
  args: {
    class: '',
  },
};

export const Heading: Story = {
  args: {
    class: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/avatar works!/gi)).toBeTruthy();
  },
};
