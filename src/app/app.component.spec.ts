import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './/app-routing.module';

@Component({
  selector: 'app-match-results',
  template: ''
})
class MockMatchResultsComponent {
}

@Component({
  selector: 'app-counters',
  template: ''
})
class MockCountersComponent {
}

@Component({
  selector: 'app-shape-selector',
  template: ''
})
class MockShapeSelectorComponent {
}

@Component({
  selector: 'app-messages',
  template: ''
})
class MockMessagesComponent {
}

@Component({
  selector: 'app-opponent-selector',
  template: ''
})
class MockOpponentSelectorComponent {
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockOpponentSelectorComponent,
        MockShapeSelectorComponent,
        MockMessagesComponent,
        MockCountersComponent,
        MockMatchResultsComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Rock, paper, scissors game'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Rock, paper, scissors game');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock, paper, scissors game');
  }));
});
