import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShapeSelectorComponent } from './shape-selector/shape-selector.component';
import { MessagesComponent } from './messages/messages.component';
import { CountersComponent } from './counters/counters.component';
import { MatchResultsComponent } from './match-results/match-results.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeSelectorComponent,
    MessagesComponent,
    CountersComponent,
    MatchResultsComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
