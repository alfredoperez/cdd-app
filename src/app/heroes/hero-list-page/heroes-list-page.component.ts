import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero, HeroService } from '../../shared';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../components/hero-card/hero-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroCardComponent, HeroCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-3xl font-bold text-center">Heroes</h1>
    <ul class="flex flex-wrap gap-8 justify-center">
      <li
        app-hero-card
        *ngFor="let hero of $heroes | async; trackBy: trackHeroRow"
        [hero]="hero"
        class="mt-8"
      ></li>
    </ul>
  `,
})
export class HeroesListPageComponent {
  $heroes = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {}

  trackHeroRow(_index: number, hero: Hero) {
    return hero.id;
  }
}
