import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CortecajaPageRoutingModule } from './cortecaja-routing.module';

import { CortecajaPage } from './cortecaja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CortecajaPageRoutingModule
  ],
  declarations: [CortecajaPage]
})
export class CortecajaPageModule {}
