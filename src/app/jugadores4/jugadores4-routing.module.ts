import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jugadores4Page } from './jugadores4.page';

const routes: Routes = [
  {
    path: '',
    component: Jugadores4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jugadores4PageRoutingModule {}
