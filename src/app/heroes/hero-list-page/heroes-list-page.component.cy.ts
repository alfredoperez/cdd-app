import { TestBed } from '@angular/core/testing';
import { HeroesListPageComponent } from './heroes-list-page.component';
import { HeroService } from '../../shared';
import { HttpClientModule } from '@angular/common/http';
import { HeroesMocks } from '../hero.mocks';

describe(HeroesListPageComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(HeroesListPageComponent, {});
  });

  describe('With heroes', () => {
    before(() => {
      cy.intercept('GET', '/api/heroes', {
        body: [HeroesMocks.data.hero, HeroesMocks.data.heroWithoutPowers],
      }).as('getHeroes');
    });

    it('shows the heroes', () => {
      cy.mount(HeroesListPageComponent, {
        imports: [HttpClientModule],
        providers: [HeroService],
      });

      cy.wait('@getHeroes');
      cy.findByText(HeroesMocks.data.hero.name).should('exist');
      cy.findByText(HeroesMocks.data.heroWithoutPowers.name).should('exist');
    });
  });
});
