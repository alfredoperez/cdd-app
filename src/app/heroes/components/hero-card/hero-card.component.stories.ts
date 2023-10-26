import type { Meta, StoryObj } from '@storybook/angular';
import { HeroCardComponent } from './hero-card.component';
import { HeroesMocks } from '../../hero.mocks';

const meta: Meta<HeroCardComponent> = {
  component: HeroCardComponent,
  title: 'Heroes/Components/Hero Card',
};
export default meta;
type Story = StoryObj<HeroCardComponent>;

export const Default: Story = {
  args: {
    hero: HeroesMocks.data.hero,
  },
};

export const WithoutPowers: Story = {
  args: {
    hero: HeroesMocks.data.heroWithoutPowers,
  },
};
