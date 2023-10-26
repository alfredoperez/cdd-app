import { TestBed } from '@angular/core/testing';
import { HeroCardComponent } from './hero-card.component';
import { HeroesMocks } from '../../hero.mocks';

describe(HeroCardComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(HeroCardComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(HeroCardComponent, {
      componentProperties: {
        hideButtons: false,
      },
    });
  });

  describe('When hero has powers', () => {
    before(() => {
      cy.mount(HeroCardComponent, {
        componentProperties: {
          hero: HeroesMocks.data.hero,
        },
      });
    });
    it('shows the powers correctly', () => {
      cy.findByText('Super Strength,').should('exist');
      cy.findByText('Super Speed').should('exist');
    });
  });

  describe('With hero without powers', () => {
    before(() => {
      cy.mount(HeroCardComponent, {
        componentProperties: {
          hero: HeroesMocks.data.heroWithoutPowers,
        },
      });
    });
    it('shows the correct info', () => {
      cy.findByText('This hero is powerless ').should('exist');
    });
  });
});
