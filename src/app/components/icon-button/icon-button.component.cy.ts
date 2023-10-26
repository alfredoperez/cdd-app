import { TestBed } from '@angular/core/testing';
import { IconButtonComponent } from './icon-button.component';

describe(IconButtonComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(IconButtonComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(IconButtonComponent);
  });
});
