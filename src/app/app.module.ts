import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpponentSelectorComponent } from './opponent-selector/opponent-selector.component';
import { ShapeSelectorComponent } from './shape-selector/shape-selector.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { CountersComponent } from './counters/counters.component';
import { MatchResultsComponent } from './match-results/match-results.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentSelectorComponent,
    ShapeSelectorComponent,
    MessagesComponent,
    CountersComponent,
    MatchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
