import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugadores2PageRoutingModule } from './jugadores2-routing.module';

import { Jugadores2Page } from './jugadores2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugadores2PageRoutingModule
  ],
  declarations: [Jugadores2Page]
})
export class Jugadores2PageModule {}
