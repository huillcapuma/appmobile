import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosListadoPageRoutingModule } from './miembros-listado-routing.module';

import { MiembrosListadoPage } from './miembros-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosListadoPageRoutingModule
  ],
  declarations: [MiembrosListadoPage]
})
export class MiembrosListadoPageModule {}
