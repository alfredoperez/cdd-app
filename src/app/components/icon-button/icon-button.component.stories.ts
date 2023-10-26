import type { Meta, StoryObj } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

const meta: Meta<IconButtonComponent> = {
  component: IconButtonComponent,
  title: 'IconButtonComponent',
};
export default meta;
type Story = StoryObj<IconButtonComponent>;

export const Primary: Story = {
  args: {},
};
