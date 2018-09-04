import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeSelectorComponent } from './shape-selector.component';

let component: ShapeSelectorComponent;
let fixture:   ComponentFixture<ShapeSelectorComponent>;
let h2:        HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ ShapeSelectorComponent ],
  });
  fixture = TestBed.createComponent(ShapeSelectorComponent);
  component = fixture.componentInstance; // ShapeSelectorComponent test instance
  h2 = fixture.nativeElement.querySelector('h2');
});

it('should display original title', () => {
  expect(h2.textContent).toContain('Choose a shape');
});
