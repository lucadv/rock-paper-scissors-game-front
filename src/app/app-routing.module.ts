import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShapeSelectorComponent } from './shape-selector/shape-selector.component';

const routes: Routes = [
  { path: 'shape-selection/:id', component: ShapeSelectorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
