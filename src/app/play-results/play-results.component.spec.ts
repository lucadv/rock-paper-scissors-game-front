import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayResultsComponent } from './play-results.component';

describe('PlayResultsComponent', () => {
  let component: PlayResultsComponent;
  let fixture: ComponentFixture<PlayResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
