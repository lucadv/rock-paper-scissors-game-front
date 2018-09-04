import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { OpponentSelectorComponent } from './opponent-selector.component';

describe('OpponentSelectorComponent', () => {
  let component: OpponentSelectorComponent;
  let fixture: ComponentFixture<OpponentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpponentSelectorComponent ],
      imports: [
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
