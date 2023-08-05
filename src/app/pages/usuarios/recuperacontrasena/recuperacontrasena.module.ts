import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacontrasenaPageRoutingModule } from './recuperacontrasena-routing.module';

import { RecuperacontrasenaPage } from './recuperacontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperacontrasenaPageRoutingModule
  ],
  declarations: [RecuperacontrasenaPage]
})
export class RecuperacontrasenaPageModule {}
