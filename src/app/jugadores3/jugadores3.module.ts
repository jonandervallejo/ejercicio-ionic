import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Jugadores3PageRoutingModule } from './jugadores3-routing.module';

import { Jugadores3Page } from './jugadores3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Jugadores3PageRoutingModule
  ],
  declarations: [Jugadores3Page]
})
export class Jugadores3PageModule {}
