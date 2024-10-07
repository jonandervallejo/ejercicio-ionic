import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugadores4PageRoutingModule } from './jugadores4-routing.module';

import { Jugadores4Page } from './jugadores4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugadores4PageRoutingModule
  ],
  declarations: [Jugadores4Page]
})
export class Jugadores4PageModule {}
