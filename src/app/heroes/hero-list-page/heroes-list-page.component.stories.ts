import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HeroesListPageComponent } from './heroes-list-page.component';
import { Hero, HeroService } from '../../shared';
import { HeroesMocks } from '../hero.mocks';
import { HttpClientModule } from '@angular/common/http';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

const meta: Meta<HeroesListPageComponent> = {
  component: HeroesListPageComponent,
  title: 'Heroes/List Page',
  decorators: [moduleMetadata({ imports: [HttpClientModule] })],
};
export default meta;
type Story = StoryObj<HeroesListPageComponent>;

const getDecorators = (heroes: Array<Hero>) => {
  return [
    moduleMetadata({
      providers: [
        MockProvider(HeroService, {
          getHeroes: () => of(heroes),
        }),
      ],
    }),
  ];
};
export const Default: Story = {
  args: {},
  decorators: getDecorators([
    HeroesMocks.data.hero,
    HeroesMocks.data.heroWithoutPowers,
  ]),
};

export const Empty: Story = {
  args: {},
  decorators: getDecorators([]),
};
