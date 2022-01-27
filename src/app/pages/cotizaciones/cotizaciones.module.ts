import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionesPageRoutingModule } from './cotizaciones-routing.module';

import { CotizacionesPage } from './cotizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CotizacionesPage]
})
export class CotizacionesPageModule {}
