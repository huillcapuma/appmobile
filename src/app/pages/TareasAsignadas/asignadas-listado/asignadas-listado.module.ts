import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignadasListadoPageRoutingModule } from './asignadas-listado-routing.module';

import { AsignadasListadoPage } from './asignadas-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignadasListadoPageRoutingModule
  ],
  declarations: [AsignadasListadoPage]
})
export class AsignadasListadoPageModule {}
