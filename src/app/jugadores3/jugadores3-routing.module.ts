import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugadores3Page } from './jugadores3.page';

const routes: Routes = [
  {
    path: '',
    component: Jugadores3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugadores3PageRoutingModule {}
