import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe(ButtonComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(ButtonComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(ButtonComponent, {
      componentProperties: {
        type: 'primary',
        expand: 'inline-block',
        focus: false,
        label: '',
      },
    });
  });
});
