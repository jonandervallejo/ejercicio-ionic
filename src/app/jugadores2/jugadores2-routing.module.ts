import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugadores2Page } from './jugadores2.page';

const routes: Routes = [
  {
    path: '',
    component: Jugadores2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugadores2PageRoutingModule {}
