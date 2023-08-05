import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevatareaPageRoutingModule } from './nuevatarea-routing.module';

import { NuevatareaPage } from './nuevatarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NuevatareaPageRoutingModule
  ],
  declarations: [NuevatareaPage]
})
export class NuevatareaPageModule {}
