import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosAddEditPageRoutingModule } from './miembros-add-edit-routing.module';

import { MiembrosAddEditPage } from './miembros-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MiembrosAddEditPageRoutingModule
  ],
  declarations: [MiembrosAddEditPage]
})
export class MiembrosAddEditPageModule {}
