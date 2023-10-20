import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Save',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Save',
  },
};
